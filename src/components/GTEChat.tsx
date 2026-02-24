/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Loader2, Send, Upload, XCircle, Mic, StopCircle } from "lucide-react";
import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  isError?: boolean;
}

interface ExerciseRequest {
  topic: string;
  difficulty: string;
  quantity: number;
  contextImage?: string;
  contextText?: string;
}

enum RecordingState {
  IDLE,
  RECORDING,
  TRANSCRIBING,
}

export function GTEChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("medium");
  const [quantity, setQuantity] = useState<number>(1);
  const [contextImage, setContextImage] = useState<string | null>(null);
  const [contextImageFile, setContextImageFile] = useState<File | null>(null);
  const [recordingState, setRecordingState] = useState<RecordingState>(RecordingState.IDLE);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const audioWorkletNodeRef = useRef<AudioWorkletNode | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // Scroll to bottom on new messages
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = getLoginUrl();
    }
  }, [isAuthenticated, authLoading]);

  const initializeGenAI = async () => {
    if (!aiRef.current) {
      const apiKey = process.env.GEMINI_API || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        toast.error("API Key not found. Please configure your GEMINI_API.");
        return null;
      }
      aiRef.current = new GoogleGenAI({ apiKey });
    }
    return aiRef.current;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error("La imagen es demasiado grande. Máximo 5MB.");
        return;
      }
      setContextImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setContextImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeContextImage = () => {
    setContextImage(null);
    setContextImageFile(null);
  };

  const sendMessage = async (messageContent: string, isVoiceInput = false) => {
    if (!messageContent.trim() && !contextImage) return;

    const newMessages: ChatMessage[] = [...messages];
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    };
    newMessages.push(userMessage);
    setMessages(newMessages);
    setInputMessage("");
    setLoading(true);

    try {
      const ai = await initializeGenAI();
      if (!ai) return;

      const parts: any[] = [];

      if (contextImageFile) {
        const base64Data = contextImage.split(',')[1];
        parts.push({
          inlineData: {
            mimeType: contextImageFile.type,
            data: base64Data,
          },
        });
      }

      parts.push({
        text: `Genera ${quantity} ejercicios de ${topic || 'Matemática o Física'} con dificultad ${difficulty}. Contexto adicional: ${messageContent}`,
      });

      const response: GenerateContentResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview", // Using a general model for text and image input
        contents: { parts },
        config: {
          temperature: 0.7,
          topP: 0.95,
          topK: 64,
        },
      });

      const modelResponseText = response.text || "No se pudo generar una respuesta.";

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          role: "model",
          content: modelResponseText,
        },
      ]);

      removeContextImage(); // Clear image after sending
    } catch (error: any) {
      console.error("Error sending message to Gemini API:", error);
      toast.error("Error al generar ejercicios. Inténtalo de nuevo.");
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          role: "model",
          content: `Error: ${error.message || "Ocurrió un error inesperado."}`,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateExercises = () => {
    const request: ExerciseRequest = {
      topic,
      difficulty,
      quantity,
      contextImage: contextImage || undefined,
      contextText: inputMessage || undefined,
    };
    sendMessage(inputMessage);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setRecordingState(RecordingState.TRANSCRIBING);
        const base64Audio = await blobToBase64(audioBlob);

        try {
          const ai = await initializeGenAI();
          if (!ai) return;

          const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash-native-audio-preview-09-2025",
            contents: { parts: [{ inlineData: { mimeType: 'audio/webm', data: base64Audio } }] },
            config: {
              outputAudioTranscription: {},
            },
          });
          const transcription = response.candidates?.[0]?.content?.parts?.[0]?.text;
          if (transcription) {
            setInputMessage(transcription);
            sendMessage(transcription, true);
          } else {
            toast.error("No se pudo transcribir el audio.");
          }
        } catch (error) {
          console.error("Error transcribing audio:", error);
          toast.error("Error al transcribir el audio.");
        } finally {
          setRecordingState(RecordingState.IDLE);
        }
      };

      mediaRecorderRef.current.start();
      setRecordingState(RecordingState.RECORDING);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("No se pudo iniciar la grabación. Asegúrate de que el micrófono esté disponible.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <Card className="bg-space-navy-700 border-space-navy-600 shadow-lg">
      <CardHeader className="border-b border-space-navy-600">
        <CardTitle className="text-gold-400 font-display">Generador de Ejercicios</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Configuration Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-muted-foreground mb-1">Tema</label>
            <Input
              id="topic"
              placeholder="Ej: Ecuaciones de segundo grado"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-space-navy-800 border-space-navy-600 text-foreground focus:border-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-muted-foreground mb-1">Dificultad</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="bg-space-navy-800 border-space-navy-600 text-foreground focus:ring-cyan-500">
                <SelectValue placeholder="Selecciona la dificultad" />
              </SelectTrigger>
              <SelectContent className="bg-space-navy-800 border-space-navy-600 text-foreground">
                <SelectItem value="easy">Fácil</SelectItem>
                <SelectItem value="medium">Media</SelectItem>
                <SelectItem value="hard">Difícil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-muted-foreground mb-1">Cantidad</label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="bg-space-navy-800 border-space-navy-600 text-foreground focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Chat Area */}
        <ScrollArea ref={chatContainerRef} className="h-[400px] border border-space-navy-600 rounded-lg p-4 bg-space-navy-800">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground italic">
                ¡Hola! ¿Qué ejercicios te gustaría generar hoy?
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${message.role === "user"
                      ? "bg-cyan-600 text-white" : "bg-space-navy-600 text-foreground"}
                    ${message.isError ? "bg-red-600" : ""}`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-space-navy-600 text-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Image Context Upload */}
        {contextImage && (
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-space-navy-600">
            <img src={contextImage} alt="Context" className="w-full h-full object-cover" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 bg-background/50 hover:bg-background text-red-500"
              onClick={removeContextImage}
            >
              <XCircle className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-4">
          <Input
            type="file"
            accept="image/*"
            id="image-upload"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <Button variant="outline" size="icon" className="bg-space-navy-800 border-space-navy-600 text-cyan-500 hover:bg-space-navy-600">
              <Upload className="w-5 h-5" />
            </Button>
          </label>

          {recordingState === RecordingState.IDLE && (
            <Button variant="outline" size="icon" className="bg-space-navy-800 border-space-navy-600 text-green-500 hover:bg-space-navy-600" onClick={startRecording}>
              <Mic className="w-5 h-5" />
            </Button>
          )}
          {recordingState === RecordingState.RECORDING && (
            <Button variant="outline" size="icon" className="bg-red-500 text-white hover:bg-red-600 animate-pulse" onClick={stopRecording}>
              <StopCircle className="w-5 h-5" />
            </Button>
          )}
          {recordingState === RecordingState.TRANSCRIBING && (
            <Button variant="outline" size="icon" className="bg-space-navy-800 border-space-navy-600 text-muted-foreground" disabled>
              <Loader2 className="w-5 h-5 animate-spin" />
            </Button>
          )}

          <Textarea
            placeholder="Describe los ejercicios que quieres generar o adjunta una imagen..."
            className="flex-1 bg-space-navy-800 border-space-navy-600 text-foreground focus:border-cyan-500 resize-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !loading) {
                e.preventDefault();
                handleGenerateExercises();
              }
            }}
            rows={1}
          />
          <Button
            onClick={handleGenerateExercises}
            disabled={loading || (!inputMessage.trim() && !contextImage)}
            className="px-6 py-2 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#00ff88", color: "#0a1628" }}
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="w-5 h-5" />}
            <span className="ml-2">Generar</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

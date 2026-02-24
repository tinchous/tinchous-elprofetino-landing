export interface Notification {
  id: string;
  studentId: string;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Class {
  id: number;
  studentId: number;
  studentName?: string;
  subject: string;
  scheduledAt: string;
  duration: number;
  topic?: string;
  notes?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

// In-memory store
export const notifications: Notification[] = [];
export const classes: Class[] = [
  {
    id: 1,
    studentId: 1,
    studentName: "Alice Smith",
    subject: "matematica",
    scheduledAt: new Date(2024, 7, 20, 10, 0).toISOString(),
    duration: 60,
    topic: "Álgebra Lineal",
    notes: "Introducción a vectores y matrices",
    status: "scheduled"
  },
  {
    id: 2,
    studentId: 1,
    studentName: "Alice Smith",
    subject: "fisica",
    scheduledAt: new Date(2024, 7, 22, 14, 0).toISOString(),
    duration: 60,
    topic: "Física Cuántica",
    notes: "Principios de la mecánica cuántica",
    status: "scheduled"
  }
];

export const addNotification = (studentId: string | number, title: string, message: string) => {
  const newNotification: Notification = {
    id: Math.random().toString(36).substring(7),
    studentId: studentId.toString(),
    title,
    message,
    createdAt: new Date().toISOString(),
    read: false,
  };
  notifications.push(newNotification);
  return newNotification;
};

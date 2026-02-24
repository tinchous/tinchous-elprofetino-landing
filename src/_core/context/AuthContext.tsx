import React, { createContext, useState, useEffect, useContext } from 'react';
import { trpc } from "@/_core/utils/trpc";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, isLoading, isError, error } = trpc.auth.getSession.useQuery(undefined, {
    retry: false, // Do not retry on auth errors
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  useEffect(() => {
    if (!isLoading) {
      if (data?.user) {
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching session:", error);
      // Optionally show a toast for specific errors, but generally fail silently for session checks
      // toast.error("Error fetching session. Please try again.");
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [isError, error]);

  const logout = () => {
    // This will typically involve redirecting to a logout endpoint
    // For now, we'll just clear local state and let the server handle actual logout
    setUser(null);
    setIsAuthenticated(false);
    toast.info("Has cerrado sesión.");
    // In a real app, you'd redirect to the logout URL here
    window.location.href = "/api/auth/logout"; // Example logout endpoint
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

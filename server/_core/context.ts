import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

interface UserSession {
  id: string;
  name: string;
  email: string;
  picture?: string;
  isAdmin: boolean;
}

export function createContext({ req, res }: CreateExpressContextOptions) {
  let user: UserSession | null = null;

  try {
    const userDataCookie = req.cookies?.user_data;
    if (userDataCookie) {
      user = JSON.parse(userDataCookie) as UserSession;
    }
  } catch (error) {
    console.error('Error parsing user_data cookie:', error);
  }

  return { req, res, user };
}

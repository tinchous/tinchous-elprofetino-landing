import { TRPCError } from "@trpc/server";
import { t } from "./trpc";
import { z } from "zod";

export const authRouter = t.router({
  getSession: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      return { user: null };
    }
    return { user: ctx.user };
  }),

  // This is a placeholder for a real login/logout mechanism.
  // In a real app, these would typically redirect to an OAuth provider
  // or handle local session creation/destruction.
  login: t.procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      // Simulate user lookup
      if (input.email === "admin@example.com" && input.password === "password") {
        return { success: true, message: "Login successful (simulated)" };
      }
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid credentials" });
    }),

  logout: t.procedure.mutation(async () => {
    // Simulate session invalidation
    return { success: true, message: "Logout successful (simulated)" };
  }),

  contact: t.procedure
    .input(z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(10),
    }))
    .mutation(async ({ input }) => {
      // In a real app, this would send an email or save to a database
      console.log(`Contact message from ${input.name} (${input.email}): ${input.message}`);
      return { success: true, message: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto." };
    }),
});

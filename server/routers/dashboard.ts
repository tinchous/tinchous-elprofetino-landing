import { TRPCError } from "@trpc/server";
import { t } from "./trpc";
import { z } from "zod";
import { notifications, classes } from "./mockStore";

export const dashboardRouter = t.router({
  getStudent: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // Simulate fetching student data
    return {
      id: ctx.user.id,
      name: ctx.user.name,
      email: ctx.user.email,
      level: "Intermedio",
      points: 1250,
      learningProgress: 75,
      intelligence: 80,
      seduction: 60,
      sanctions: 5,
    };
  }),

  getUpcomingClasses: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // In a real app, we'd filter by studentId. For mock, we'll just return all for student 1
    return classes.filter(c => c.studentId === 1 || c.studentId === Number(ctx.user.id));
  }),

  getProgress: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return [
      { id: 1, subject: "Matemática", topic: "Álgebra", level: 85 },
      { id: 2, subject: "Física", topic: "Cinemática", level: 70 },
    ];
  }),

  getPendingAssignments: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return [
      { id: "a1", subject: "Matemática", topic: "Ecuaciones", description: "Resolver guía 4", dueDate: new Date(2024, 7, 25).toISOString() },
    ];
  }),

  getPeoToolAccess: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return ["tizaia", "generatusejercicios", "tuexamenpersonal"];
  }),

  getNotifications: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // Filter by studentId (mocking studentId 1 for the demo user)
    return notifications.filter(n => n.studentId === "1" || n.studentId === ctx.user.id.toString());
  }),

  getExamHistory: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return [
      { id: "e1", title: "Álgebra Básica", percentage: 85, createdAt: new Date(2024, 1, 15).toISOString(), topics: "Ecuaciones, Vectores", pointsEarned: 85, totalPoints: 100 },
    ];
  }),

  markNotificationAsRead: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      const index = notifications.findIndex(n => n.id === input.id);
      if (index !== -1) {
        notifications[index].read = true;
      }
      return { success: true };
    }),

  updateStudentPoints: t.procedure
    .input(z.object({
      studentId: z.string(),
      points: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      console.log(`Updating points for student ${input.studentId} to ${input.points}`);
      return { success: true, message: "Points updated successfully (simulated)" };
    }),
});

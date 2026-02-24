import { TRPCError } from "@trpc/server";
import { t } from "./trpc";
import { z } from "zod";
import { classes, addNotification } from "./mockStore";

export const adminRouter = t.router({
  listStudents: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user || !ctx.user.isAdmin) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // Simulate fetching a list of students
    return [
      { id: 1, name: "Alice Smith", email: "alice@example.com", level: "bachillerato", institution: "Liceo", phone: "099123456", points: 500, isAdmin: false, userName: "Alice Smith", userEmail: "alice@example.com" },
      { id: 2, name: "Bob Johnson", email: "bob@example.com", level: "7-9", institution: "UTU", phone: "098765432", points: 1200, isAdmin: false, userName: "Bob Johnson", userEmail: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", level: "bachillerato", institution: "Liceo Militar", phone: "091111111", points: 2000, isAdmin: false, userName: "Charlie Brown", userEmail: "charlie@example.com" },
    ];
  }),

  listUsers: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user || !ctx.user.isAdmin) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return [
      { id: 1, name: "Alice Smith", email: "alice@example.com" },
      { id: 2, name: "Bob Johnson", email: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    ];
  }),

  createStudent: t.procedure
    .input(z.object({
      userId: z.number(),
      level: z.string(),
      institution: z.string(),
      subjects: z.string(),
      phone: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return { success: true, id: Math.floor(Math.random() * 1000) };
    }),

  updateStudent: t.procedure
    .input(z.object({
      id: z.number(),
      level: z.string().optional(),
      institution: z.string().optional(),
      subjects: z.string().optional(),
      phone: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return { success: true };
    }),

  deleteStudent: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return { success: true };
    }),

  listClasses: t.procedure
    .input(z.object({ studentId: z.number().optional() }))
    .query(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      if (input.studentId) {
        return classes.filter(c => c.studentId === input.studentId);
      }
      return classes;
    }),

  createClass: t.procedure
    .input(z.object({
      studentId: z.number(),
      subject: z.string(),
      scheduledAt: z.string(),
      duration: z.number(),
      topic: z.string().optional(),
      notes: z.string().optional(),
      status: z.enum(['scheduled', 'completed', 'cancelled']).default('scheduled'),
    }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      
      const newClass = {
        id: classes.length + 1,
        ...input,
        studentName: "Estudiante" // Simplified
      };
      classes.push(newClass);

      // Notify student
      const dateStr = new Date(input.scheduledAt).toLocaleString('es-UY');
      addNotification(
        input.studentId,
        "Nueva Clase Programada",
        `Se ha programado una nueva clase de ${input.subject === 'matematica' ? 'Matemática' : 'Física'} sobre "${input.topic || 'Sin tema'}" para el ${dateStr}.`
      );

      return { success: true, class: newClass };
    }),

  updateClass: t.procedure
    .input(z.object({
      id: z.number(),
      scheduledAt: z.string().optional(),
      duration: z.number().optional(),
      status: z.enum(['scheduled', 'completed', 'cancelled']).optional(),
      topic: z.string().optional(),
      notes: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const index = classes.findIndex(c => c.id === input.id);
      if (index === -1) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Class not found" });
      }

      const oldClass = classes[index];
      classes[index] = { ...oldClass, ...input };
      const updatedClass = classes[index];

      // Notify student if date or status changed
      if (input.scheduledAt || input.status || input.topic) {
        const dateStr = new Date(updatedClass.scheduledAt).toLocaleString('es-UY');
        addNotification(
          updatedClass.studentId,
          "Clase Actualizada",
          `La clase de ${updatedClass.subject === 'matematica' ? 'Matemática' : 'Física'} ha sido actualizada. Nuevo horario: ${dateStr}. Estado: ${updatedClass.status}.`
        );
      }

      return { success: true, class: updatedClass };
    }),

  deleteClass: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user || !ctx.user.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      const index = classes.findIndex(c => c.id === input.id);
      if (index !== -1) {
        classes.splice(index, 1);
      }
      return { success: true };
    }),

  getExamHistory: t.procedure.query(async ({ ctx }) => {
    if (!ctx.user || !ctx.user.isAdmin) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return [
      { id: "e1", studentName: "Alice Smith", title: "Álgebra Básica", score: 85, date: new Date(2024, 1, 15).toISOString(), topics: ["Ecuaciones", "Vectores"], subject: "Matemáticas" },
    ];
  }),
});

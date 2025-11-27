"use server";

import { Resend } from 'resend';
import { z } from 'zod';

// Schéma de validation avec Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function sendEmail(prevState: FormState, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // Si la validation échoue, retourner les erreurs
  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: "Erreur de validation.",
      issues,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Adresse d'envoi de Resend
      to: 'h.garoum@gmail.com', // Votre adresse email
      subject: `Nouveau message de ${name} via votre portfolio`,
      reply_to: email,
      text: `De: ${name} <${email}>\n\nMessage:\n${message}`,
    });
    return { message: "Message envoyé avec succès !" };
  } catch (error) {
    console.error(error);
    return { message: "Une erreur est survenue lors de l'envoi." };
  }
}
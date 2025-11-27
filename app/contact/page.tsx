"use client";

import React, { useEffect, useRef, useActionState } from 'react';
import { motion } from 'framer-motion';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import { sendEmail, FormState } from '@/actions/actions';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 bg-primary text-background font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors group disabled:bg-primary/50 disabled:cursor-not-allowed"
        >
            {pending ? "Envoi en cours..." : "Envoyer le Message"}
            {!pending && <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />}
        </button>
    );
}
export default function ContactPage() {
    const initialState: FormState = { message: "" };
    const [state, formAction] = useActionState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.message) {
            if (state.message.includes("succès")) {
                toast.success(state.message);
                formRef.current?.reset(); // Réinitialise le formulaire
            } else {
                // Affiche les erreurs de validation
                const errorMessage = state.issues ? state.issues.join('\n') : state.message;
                toast.error(errorMessage);
            }
        }
    }, [state]);

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-8 sm:p-24 overflow-hidden">
            <Toaster
                position="top-center"
                toastOptions={{
                    // Style par défaut pour tous les toasts
                    className: '',
                    style: {
                        background: '#363636',
                        color: '#fff',
                        fontSize: '16px',
                    },
                    // Styles spécifiques pour les toasts de succès
                    success: { style: { background: '#28a745', color: '#fff' } },
                    // Styles spécifiques pour les toasts d'erreur
                    error: { style: { background: '#dc3545', color: '#fff' } },
                }}
            />
            {/* Fond animé */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-tertiary/20 opacity-20 blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-2xl"
            >
                <div className="bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 text-center">
                    <h1 className="text-5xl font-bold text-primary mb-4">Me Contacter</h1>
                    <p className="text-lg text-content/80 mb-8">
                        Une question, une proposition ou simplement envie de discuter ? N&apos;hésitez pas à m&apos;envoyer un message.
                    </p>


                    <form
                        ref={formRef}
                        action={formAction}
                        className="flex flex-col gap-6 text-left"
                    >
                        <div>
                            <label htmlFor="name" className="block text-content/80 mb-2">Nom</label>
                            <input type="text" id="name" name="name" required className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-content/80 mb-2">Votre Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-content/80 mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} required className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"></textarea>
                        </div>
                        <SubmitButton />
                    </form>
                </div>
            </motion.div>
        </main>
    );
}
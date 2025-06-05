// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
}

// Initialize EmailJS
import emailjs from "@emailjs/browser"

if (typeof window !== "undefined") {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

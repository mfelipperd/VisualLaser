"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_URL =
  "https://wa.me/5591988968201?text=" +
  encodeURIComponent(
    "Olá! Vim através do site da Visual Laser e gostaria de agendar uma consulta. Podem me ajudar?"
  );

// O sistema de agendamento online (Med Plus) saiu do ar; até a clínica
// definir o novo sistema, qualquer tentativa de agendamento é redirecionada
// para o WhatsApp.
const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    trackEvent("whatsapp_click", { location: "appointment_modal" });
    window.open(WHATSAPP_URL, "_blank");
    onClose();
  }, [isOpen, onClose]);

  return null;
};

export default AppointmentModal;

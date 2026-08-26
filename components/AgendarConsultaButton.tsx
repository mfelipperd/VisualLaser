"use client";

import { useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";

interface AgendarConsultaButtonProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const AgendarConsultaButton = ({ className, id, children }: AgendarConsultaButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button id={id} onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>
      <AppointmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AgendarConsultaButton;

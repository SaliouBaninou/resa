"use client";

import SideBare from "@/components/SideBare";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative w-screen h-screen bg-gray-50 lg:p-10">
      {/* Sidebar */}
      <SideBare />

      {/* Contenu principal */}
      <div
        className="
          flex-1 h-full 
          lg:ml-[300px]   /* Décalage pour la sidebar desktop */
          pt-[70px] lg:pt-10  /* Espace en haut pour barre mobile ou top */
          px-4 lg:px-16  /* padding horizontal responsive */
          pb-6 lg:pb-10  /* padding bas */
          overflow-y-auto
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

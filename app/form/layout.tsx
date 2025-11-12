"use client";

import SideBare from "@/components/SideBare";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const variants: Variants = {
  enter: {
    opacity: 0,
    x: 80,
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -80,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};


export default function FormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative w-screen h-screen bg-gray-50 lg:p-10 flex flex-col">
      {/* Sidebar */}
      <SideBare />

      {/* Contenu principal */}
      <div
        className="
          flex-1 
          lg:ml-[300px]      /* espace pour sidebar desktop */
          pt-[70px] lg:pt-10 /* top padding responsive */
          px-4 lg:px-16      /* padding horizontal */
          pb-6 lg:pb-10      /* padding bas */
          overflow-y-auto     /* scroll activé */
          flex flex-col
          gap-4
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col gap-4"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

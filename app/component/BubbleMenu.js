'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoreVertical, FiX, FiCalendar, FiMessageCircle } from "react-icons/fi";
import Link from "next/link";

const icons = [
  { icon: <Link href="https://dkm-events.vercel.app/"><FiCalendar size={20} /></Link> },
  { icon: <Link href="https://curhat-dkm.vercel.app/"><FiMessageCircle size={20} /></Link> },
];

export default function BubbleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const distance = 60; // jarak antar icon

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-14 h-14">
        <AnimatePresence>
          {isOpen &&
            icons.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -(distance * (index + 1)) }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="absolute right-1.5 bg-white p-3 rounded-full shadow-md hover:bg-[#0066FF]"
              >
                {item.icon}
              </motion.button>
            ))}
        </AnimatePresence>

        {/* Tombol utama */}
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.9, rotate: 180 }}
          className="w-14 h-14 cursor-pointer rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-600 transition absolute right-0 bottom-0"
        >
          {isOpen ? (
            <FiX color="white" size={28} />
          ) : (
            <FiMoreVertical color="white" size={28} />
          )}
        </motion.button>
      </div>
    </div>
  );
}

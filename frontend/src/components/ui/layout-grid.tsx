"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (selected) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, handleClose]);

  return (
    <>
      <div className="w-full h-full p-0 sm:p-2 grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-1 sm:gap-2 relative">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden bg-white rounded-xl h-full w-full cursor-pointer"
              )}
            >
              <ImageComponent card={card} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {mounted && createPortal (
      <AnimatePresence>
        {selected && (
          <FullscreenModal selected={selected} onClose={handleClose} />
        )}
      </AnimatePresence>,
      document.body
      )}
    </>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const FullscreenModal = ({
  selected,
  onClose,
}: {
  selected: Card;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image - fills entire screen */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selected.thumbnail}
          alt="thumbnail"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
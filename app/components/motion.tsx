"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({ words, className = "" }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={words.join(" ")}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[.24em] inline-block overflow-hidden pb-[.08em] pt-[.12em] pr-[.12em] align-bottom">
          <motion.span
            aria-hidden="true"
            className="inline-block"
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >{word}</motion.span>
        </span>
      ))}
    </span>
  );
}

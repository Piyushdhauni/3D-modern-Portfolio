"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 md:px-12 md:py-7 mix-blend-difference"
    >
      <a href="#top" className="font-display text-2xl tracking-widest2 text-paper">
        PD
      </a>
      <nav className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="underline-hover font-mono text-xs uppercase tracking-widest2 text-paper"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="font-mono text-xs uppercase tracking-widest2 text-paper underline-hover md:hidden"
      >
        Menu
      </a>
    </motion.header>
  );
}

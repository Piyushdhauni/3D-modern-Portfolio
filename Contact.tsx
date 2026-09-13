"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 md:py-36">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest2 text-acid">
        04 / Contact
      </p>

      <motion.a
        href="mailto:hello@piyushdhauni.dev"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group block font-display text-[13vw] leading-[0.9] tracking-tightest text-paper transition-colors duration-300 hover:text-acid md:text-[7vw]"
      >
        Let&apos;s build
        <br />
        something.
      </motion.a>

      <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="font-serifitalic max-w-xs text-xl italic text-paper/60">
          Open to internships, freelance front-end work, and collaborations.
        </p>
        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="underline-hover font-mono text-xs uppercase tracking-widest2 text-paper/70"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

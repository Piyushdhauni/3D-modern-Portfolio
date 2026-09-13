"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", note: "Semantic structure" },
  { name: "CSS", note: "Layout & motion" },
  { name: "JavaScript", note: "Interaction logic" },
  { name: "Kotlin", note: "Android development" },
  { name: "Java", note: "Core programming" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest2 text-acid">
            02 / Skills
          </p>
        </div>

        <div className="md:col-span-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="hairline group flex items-baseline justify-between py-6 md:py-8"
            >
              <h3 className="font-display text-3xl tracking-tightest text-paper transition-colors duration-300 group-hover:text-acid md:text-5xl">
                {s.name}
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest2 text-paper/40 transition-colors duration-300 group-hover:text-paper/70">
                {s.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

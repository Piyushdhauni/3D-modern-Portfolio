"use client";

import { motion } from "framer-motion";

const projects = [
  {
    index: "01",
    title: "Glass Analysis Panel",
    tags: ["UI", "Glassmorphism"],
    description:
      "A composited overlay UI — frosted glass panels, gradient score bars, rendered entirely in code as a still.",
  },
  {
    index: "02",
    title: "Film Strip / Enfield",
    tags: ["Concept", "Photo"],
    description:
      "A cinematic film-strip collage built around a Royal Enfield, exploring frame-by-frame motion in a static layout.",
  },
  {
    index: "03",
    title: "Krishna — Motion Study",
    tags: ["Canvas", "Animation"],
    description:
      "A fully coded animated illustration — traditional iconography rebuilt as HTML, CSS and JavaScript with no external art.",
  },
  {
    index: "04",
    title: "Neon Grid",
    tags: ["Game", "Concept"],
    description:
      "A top-down, neon-lit browser game concept in the GTA vein, built from scratch in HTML, CSS and JavaScript.",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mb-16 flex items-end justify-between md:mb-24">
        <p className="font-mono text-xs uppercase tracking-widest2 text-acid">
          03 / Selected work
        </p>
        <p className="hidden font-mono text-xs uppercase tracking-widest2 text-paper/40 md:block">
          {projects.length} projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        {projects.map((p) => (
          <motion.a
            href="#contact"
            key={p.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="hairline group block py-10 first:md:border-t-0"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="font-mono text-xs text-paper/40">{p.index}</span>
                <h3 className="mt-3 font-display text-4xl tracking-tightest text-paper transition-colors duration-300 group-hover:text-acid md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-sm font-mono text-sm leading-relaxed text-paper/50">
                  {p.description}
                </p>
                <div className="mt-5 flex gap-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-widest2 text-paper/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-display text-3xl text-paper/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid">
                &#8599;
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-10 font-mono text-xs text-paper/30">
        Placeholder case studies — swap in your live links, write-ups and
        screenshots as each project is finished.
      </p>
    </section>
  );
}

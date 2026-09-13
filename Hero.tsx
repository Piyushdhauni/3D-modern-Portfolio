"use client";

import { useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.set(".hero-word", { yPercent: 110 })
        .set(".hero-fade", { opacity: 0, y: 12 })
        .set(".hero-canvas", { opacity: 0, scale: 0.9 })
        .to(".hero-canvas", { opacity: 1, scale: 1, duration: 1.6 }, 0.1)
        .to(".hero-word", { yPercent: 0, duration: 1.1, stagger: 0.08 }, 0.15)
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.5");
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-28 pb-10 md:px-12 md:pt-36"
    >
      <div className="hero-canvas pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
        <div className="h-[70vh] w-[70vh] max-w-[90vw]">
          <Scene />
        </div>
      </div>

      <div className="relative z-10">
        <p className="hero-fade mb-4 font-mono text-xs uppercase tracking-widest2 text-acid">
          Front-end developer / BCA student
        </p>

        <h1 className="font-display text-[16vw] leading-[0.82] tracking-tightest text-paper md:text-[9vw]">
          <span className="block overflow-hidden">
            <span className="hero-word block">PIYUSH</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word block text-acid">DHAUNI</span>
          </span>
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <p className="hero-fade max-w-md font-serifitalic text-2xl italic text-paper/80 md:text-3xl">
          Building interfaces that sit somewhere between code and craft.
        </p>
        <div className="hero-fade flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-paper/60">
          <span className="h-px w-10 bg-paper/40" />
          Scroll
        </div>
      </div>
    </section>
  );
}

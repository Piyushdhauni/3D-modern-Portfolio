export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest2 text-acid">01 / About</p>
        </div>

        <div className="md:col-span-8">
          <p className="font-display text-4xl leading-[1.05] tracking-tightest text-paper md:text-6xl">
            Currently pursuing a{" "}
            <span className="text-acid">BCA</span> at Six Sigma Institute of
            Technology and Science, spending most of my free time turning
            interfaces into small performances — motion, typography and code
            treated as one material.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="hairline pt-6">
              <p className="font-serifitalic text-xl italic text-paper/70">
                What I&apos;m into
              </p>
              <p className="mt-3 font-mono text-sm leading-relaxed text-paper/50">
                Cinematic imagery, generative motion, and interfaces that
                borrow the discipline of editorial design.
              </p>
            </div>

            <div className="hairline pt-6">
              <p className="font-serifitalic text-xl italic text-paper/70">
                Certification
              </p>
              <p className="mt-3 font-mono text-sm leading-relaxed text-paper/50">
                Deloitte Data Analytics Job Simulation, completed via Forage —
                applying structured analytical thinking alongside design work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

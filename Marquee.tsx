const items = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "KOTLIN",
  "JAVA",
  "REACT THREE FIBER",
  "GSAP",
  "TAILWIND",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="hairline border-b border-acid/20 bg-ink py-4 md:py-6">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-3xl tracking-tightest text-paper/15 md:mx-10 md:text-5xl"
          >
            {item}{" "}
            <span className="text-acid/40">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="hairline flex flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-12">
      <p className="font-mono text-xs text-paper/40">
        &copy; {new Date().getFullYear()} Piyush Dhauni. Built with Next.js &amp; Three.js.
      </p>
      <a
        href="#top"
        className="underline-hover font-mono text-xs uppercase tracking-widest2 text-paper/60"
      >
        Back to top
      </a>
    </footer>
  );
}

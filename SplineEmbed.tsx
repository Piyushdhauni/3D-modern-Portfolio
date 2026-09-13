"use client";

// Optional accent: drop a Spline scene into the page without it breaking
// the build if you haven't exported one yet.
//
// 1. Design a scene at https://spline.design
// 2. Export → "Public URL" (or "Code export" → React)
// 3. Add it to .env.local as:  NEXT_PUBLIC_SPLINE_SCENE_URL=https://prod.spline.design/xxxx/scene.splinecode
// 4. Drop <SplineEmbed /> anywhere you want the 3D object to sit
//    (e.g. inside About.tsx next to the bio, or as a second hero layer).

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

export default function SplineEmbed({ className = "" }: { className?: string }) {
  const sceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;

  if (!sceneUrl) {
    return (
      <div
        className={`flex items-center justify-center rounded-sm border border-dashed border-paper/15 font-mono text-[10px] uppercase tracking-widest2 text-paper/25 ${className}`}
      >
        Add NEXT_PUBLIC_SPLINE_SCENE_URL to render your Spline scene here
      </div>
    );
  }

  return (
    <div className={className}>
      <Spline scene={sceneUrl} />
    </div>
  );
}

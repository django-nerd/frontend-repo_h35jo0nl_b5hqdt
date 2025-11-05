import React from 'react';
import Spline from '@splinetool/react-spline';

export default function TitleHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/10" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-5xl items-center px-6">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full bg-sky-100/80 px-3 py-1 text-sm font-medium text-sky-700 backdrop-blur">
            Seminar Proposal Skripsi
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 drop-shadow-sm md:text-5xl">
            Strategi Public Relations dalam Membangun Citra Perusahaan melalui Program Corporate Social Responsibility (CSR) PT Madubaru (PG–PS Madukismo)
          </h1>
          <div className="grid gap-2 text-gray-800 md:grid-cols-2 md:gap-4">
            <p>
              Oleh: <span className="font-semibold">Hana Hoerunisa</span> – 220710137
            </p>
            <p>
              Dosen Pembimbing: <span className="font-semibold">Rila Setiyaningsih, S.I.Kom., M.I.Kom.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function TitleHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
            Seminar Proposal Skripsi
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Strategi Public Relations dalam Membangun Citra Perusahaan melalui Program Corporate Social Responsibility (CSR) PT Madubaru (PG–PS Madukismo)
          </h1>
          <div className="grid gap-2 text-gray-700 md:grid-cols-2 md:gap-4">
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

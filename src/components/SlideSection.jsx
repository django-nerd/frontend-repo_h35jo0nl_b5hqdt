import React from 'react';

export default function SlideSection({ id, title, bullets = [], children, note }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2>
      </div>
      {bullets.length > 0 && (
        <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {children}
      {note && <p className="mt-4 text-sm text-gray-500">{note}</p>}
    </section>
  );
}

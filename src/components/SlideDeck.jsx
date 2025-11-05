import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SlideDeck({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const clamp = useCallback((i) => {
    if (i < 0) return 0;
    if (i >= total) return total - 1;
    return i;
  }, [total]);

  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const variants = useMemo(() => ({
    enter: { x: 40, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -40, opacity: 0 },
  }), []);

  return (
    <div className="relative mx-auto max-w-5xl px-4 md:px-6">
      {/* Content */}
      <div className="relative min-h-[70vh] overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm ring-1 ring-gray-100 md:p-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs font-medium tracking-wide text-sky-600">Slide {index + 1} / {total}</div>
          <div className="text-sm font-semibold text-gray-900">{slides[index]?.title}</div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index]?.id ?? index}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ type: 'spring', stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            >
              {slides[index]?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          aria-label="Previous slide"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={prev}
          disabled={index === 0}
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-sky-500' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          aria-label="Next slide"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={next}
          disabled={index === total - 1}
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

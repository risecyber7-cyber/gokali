import { useState, useEffect } from 'react';
import screenshotToolExplorer from '@/assets/screenshot-tool-explorer.png';
import screenshotAiAssistant from '@/assets/screenshot-ai-assistant.png';
import screenshotKaliLearn from '@/assets/screenshot-kali-learn.png';
import screenshotWordlistGen from '@/assets/screenshot-wordlist-gen.png';

const slides = [
  { src: screenshotToolExplorer, label: 'Tool Explorer' },
  { src: screenshotAiAssistant, label: 'AI Assistant' },
  { src: screenshotKaliLearn, label: 'Kali Learn' },
  { src: screenshotWordlistGen, label: 'Wordlist Generator' },
];

const ScreenshotCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mt-6">
      <p className="text-xs text-muted-foreground text-center mb-3 font-mono uppercase tracking-wider">
        Platform Preview
      </p>
      <div className="relative rounded-xl border border-primary/20 overflow-hidden bg-card/30 backdrop-blur-sm">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.label}
              className="w-full flex-shrink-0 object-cover"
              draggable={false}
            />
          ))}
        </div>
        {/* Label */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-3">
          <p className="text-xs font-mono text-primary text-center">{slides[current].label}</p>
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary w-5' : 'bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;

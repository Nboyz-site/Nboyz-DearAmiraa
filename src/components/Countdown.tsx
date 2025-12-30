import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ targetDate, onComplete }: CountdownProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        onComplete();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-slate-800">
      <h2 className="text-2xl md:text-4xl font-light tracking-widest uppercase">Membuka dalam</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div 
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm border border-white/60"
          >
            <span className="text-4xl md:text-6xl font-bold font-mono text-slate-900">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest mt-2 text-slate-600">
              {unit}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-slate-500 mt-8 italic">
        Surat ini terkunci hingga 1 Januari 2026
      </p>
    </div>
  );
};

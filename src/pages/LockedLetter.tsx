import { useState, useEffect } from 'react';
import { Countdown } from '../components/Countdown';
import { PasswordInput } from '../components/PasswordInput';
import { Letter } from '../components/Letter';
import { motion } from 'framer-motion';

export const LockedLetter = () => {
  // Set target date to Jan 1, 2026
  // For testing purposes, you can change this to a date in the past or near future
  const TARGET_DATE = new Date('2025-01-01T00:00:00');
  
  const [isTimeReached, setIsTimeReached] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check immediately if time is already reached
    if (new Date() >= TARGET_DATE) {
      setIsTimeReached(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F4F1] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto">
        {!isTimeReached ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Countdown 
              targetDate={TARGET_DATE} 
              onComplete={() => setIsTimeReached(true)} 
            />
          </motion.div>
        ) : !isUnlocked ? (
          <PasswordInput onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <Letter />
        )}
      </div>
    </div>
  );
};

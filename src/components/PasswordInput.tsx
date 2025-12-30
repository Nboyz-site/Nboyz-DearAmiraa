import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';

interface PasswordInputProps {
  onUnlock: () => void;
}

export const PasswordInput = ({ onUnlock }: PasswordInputProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded password for demo - in real app use backend or hash
    if (password === '2026' || password.toLowerCase() === 'buka') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="p-4 bg-slate-50 rounded-full">
          <Lock className="w-8 h-8 text-slate-400" />
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-slate-800">Waktunya Telah Tiba</h2>
          <p className="text-slate-500">Masukkan kode rahasia untuk membuka surat</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <input
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/\D/g, ''))}
              placeholder="Masukkan PIN (Angka)"
              className={`w-full px-4 py-3 rounded-lg border ${
                error ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-slate-400'
              } outline-none transition-all text-center text-lg tracking-widest`}
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 group"
          >
            <span>Buka Surat</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-xs text-slate-400 text-center">
          Hint: Tahun berapa surat ini dibuka?
        </p>
      </div>
    </motion.div>
  );
};

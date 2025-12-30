import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0, rotateX: -180 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative z-10"
          >
            {/* Envelope Design */}
            <div className="bg-[#f4e4bc] w-full aspect-[4/3] shadow-2xl rounded-lg relative overflow-hidden border-2 border-[#e6d5aa] flex items-center justify-center">
              {/* Envelope Flap */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#eaddb5] origin-top transform group-hover:rotate-x-12 transition-transform duration-500 z-20 clip-path-triangle shadow-sm"></div>
              
              {/* Stamp/Seal */}
              <div className="z-30 w-16 h-16 bg-red-800 rounded-full flex items-center justify-center shadow-lg border-4 border-red-900/30 group-hover:scale-110 transition-transform">
                <span className="text-white font-serif font-bold text-xl">2026</span>
              </div>
              
              <div className="absolute bottom-10 text-[#8b7e66] font-serif italic text-lg">
                Klik untuk membuka
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="bg-[#fffbf0] p-8 md:p-12 rounded-sm shadow-2xl min-h-[60vh] relative mx-4 md:mx-0"
            style={{
              backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)',
              backgroundSize: '100% 2rem',
              lineHeight: '2rem'
            }}
          >
            <div className="font-serif text-slate-800 space-y-6">
              <div className="text-right text-slate-500 italic mb-8">
                1 Januari 2026
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-6">Dear Amira,</h1>
              
              <p>
                Jika kamu membaca ini, berarti kita sudah sampai di tahun 2026. 
                Selamat! Kamu telah melewati banyak hal untuk sampai di titik ini.
              </p>
              
              <p>
                Ingatkah kamu saat kita membuat surat ini di akhir tahun 2025? 
                Saat itu kita penuh dengan harapan dan mungkin sedikit kecemasan tentang masa depan.
                Semoga semua impian yang kita tuliskan dulu sudah tercapai, atau setidaknya kita sedang dalam perjalanan menuju ke sana.
              </p>
              
              <p>
                Jangan lupa untuk tetap bersyukur, tetap semangat, dan jangan pernah menyerah pada mimpimu.
                Kamu lebih kuat dari yang kamu kira.
              </p>
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="font-bold">Salam hangat,</p>
                <p className="italic text-slate-600">Dirimu dari tahun 2025</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

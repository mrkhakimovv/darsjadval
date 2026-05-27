import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, BookOpen, GraduationCap, CalendarDays, ArrowRight } from 'lucide-react';

type ScheduleItem = {
  time: string;
  title: string;
  type: string;
};

const SCHEDULE_DATA: Record<'juft' | 'toq', ScheduleItem[]> = {
  juft: [
    { time: "06:00 - 08:00", title: "Majburiy matematika guruhi", type: "majburiy" },
    { time: "08:00 - 10:00", title: "M.USMONOV 15-mavzudagi guruh", type: "mavzu" },
    { time: "10:00 - 12:00", title: "M.USMONOV 19-mavzudagi guruh", type: "mavzu" },
    { time: "13:00 - 16:00", title: "DTM", type: "dtm" }
  ],
  toq: [
    { time: "06:00 - 08:00", title: "Majburiy matematika guruhi", type: "majburiy" },
    { time: "08:00 - 10:00", title: "ATTESTATSIYA", type: "attestatsiya" },
    { time: "10:00 - 12:00", title: "LOGARIFM mavzusidagi guruh", type: "mavzu" },
    { time: "13:00 - 16:00", title: "DTM", type: "dtm" }
  ]
};

const ICONS: Record<string, React.ReactNode> = {
  majburiy: <BookOpen className="w-5 h-5 text-emerald-500" />,
  mavzu: <CalendarDays className="w-5 h-5 text-[#fec204]" />,
  dtm: <GraduationCap className="w-5 h-5 text-rose-500" />,
  attestatsiya: <Calendar className="w-5 h-5 text-blue-500" />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'toq' | 'juft'>('toq');

  return (
    <div className="min-h-screen bg-[#fec204] text-amber-950 font-sans p-4 sm:p-8 flex justify-center selection:bg-black/10">
      <div className="w-full max-w-xl">
        
        {/* Header */}
        <header className="mb-10 text-center mt-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center space-x-2 bg-black/10 text-amber-950 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Wissen O'quv Markazi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-amber-950 mb-2"
          >
            Hakimov Quvonchbek
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-950/70 font-medium text-sm sm:text-base"
          >
            Matematika fani o'qituvchisi dars jadvali
          </motion.p>
        </header>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex p-1 bg-black/10 rounded-2xl mb-8"
        >
          <button
            onClick={() => setActiveTab('toq')}
            className={`relative flex-1 py-3 text-sm sm:text-base font-semibold rounded-xl transition-colors duration-200 ${
              activeTab === 'toq' ? 'text-amber-950' : 'text-amber-950/60 hover:text-amber-950/80'
            }`}
          >
            {activeTab === 'toq' && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white rounded-xl shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex flex-col items-center">
              <span>Toq kunlar</span>
              <span className="text-xs font-normal opacity-70 mt-0.5">Dush, Chor, Juma</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('juft')}
            className={`relative flex-1 py-3 text-sm sm:text-base font-semibold rounded-xl transition-colors duration-200 ${
              activeTab === 'juft' ? 'text-amber-950' : 'text-amber-950/60 hover:text-amber-950/80'
            }`}
          >
            {activeTab === 'juft' && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white rounded-xl shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex flex-col items-center">
              <span>Juft kunlar</span>
              <span className="text-xs font-normal opacity-70 mt-0.5">Sesh, Pay, Shan</span>
            </span>
          </button>
        </motion.div>

        {/* Schedule List */}
        <div className="relative relative-container min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'toq' ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'toq' ? 15 : -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-4"
            >
              {SCHEDULE_DATA[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-transparent flex items-center group hover:border-[#fec204] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-50 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 group-hover:bg-[#fec204]/20 transition-all duration-300">
                    {ICONS[item.type] || <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center text-neutral-500 text-xs sm:text-sm font-medium mb-1 space-x-1 sm:space-x-1.5 group-hover:text-amber-700 transition-colors">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{item.time}</span>
                    </div>
                    <h3 className="text-neutral-900 font-semibold text-base sm:text-lg leading-tight break-words">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex ml-3 sm:ml-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#fec204]" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-amber-950/50">
            Darslarga o'z vaqtida kelishingizni so'raymiz.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

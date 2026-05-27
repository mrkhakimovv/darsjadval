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
  mavzu: <CalendarDays className="w-5 h-5 text-blue-500" />,
  dtm: <GraduationCap className="w-5 h-5 text-indigo-500" />,
  attestatsiya: <Calendar className="w-5 h-5 text-amber-500" />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'toq' | 'juft'>('toq');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-8 flex justify-center selection:bg-blue-200">
      <div className="w-full max-w-xl">
        
        {/* Header */}
        <header className="mb-10 text-center mt-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Wissen O'quv Markazi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 mb-2"
          >
            Hakimov Quvonchbek
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-medium"
          >
            Matematika fani o'qituvchisi dars jadvali
          </motion.p>
        </header>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex p-1 bg-slate-200/60 rounded-2xl mb-8"
        >
          <button
            onClick={() => setActiveTab('toq')}
            className={`relative flex-1 py-3 text-sm sm:text-base font-semibold rounded-xl transition-colors duration-200 ${
              activeTab === 'toq' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
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
              activeTab === 'juft' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
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
                  className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center group hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {ICONS[item.type] || <BookOpen className="w-5 h-5 text-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-slate-500 text-sm font-medium mb-1 space-x-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-slate-900 font-semibold text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex ml-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
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
          <p className="text-xs text-slate-400">
            Darslarga o'z vaqtida kelishingizni so'raymiz.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

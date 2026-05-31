import { useState } from 'react';
import { LaundryStrategy } from './components/LaundryStrategy';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { PackingChecklist } from './components/PackingChecklist';
import { EmergencyTab } from './components/EmergencyTab';
import { TripCountdown } from './components/TripCountdown';
import { PhrasesTab } from './components/PhrasesTab';
import { TravelTipsTab } from './components/TravelTipsTab';
import { Plane, Map, Briefcase, Droplets, CalendarDays, ShieldAlert, MessageCircle, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'Packing' | 'Laundry' | 'Itinerary' | 'Emergency' | 'Phrases' | 'Tips';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Packing');

  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-2xl mx-auto px-4 py-8 pb-32 pt-12 sm:pt-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-emerald-900/50 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/20 rotate-3 border border-emerald-500/30">
              <Plane className="w-6 h-6 text-emerald-400 -rotate-12" />
            </div>
            <div className="w-12 h-12 bg-red-900/50 rounded-2xl flex items-center justify-center border border-red-500/30 -rotate-3 backdrop-blur-sm">
              <Map className="w-6 h-6 text-red-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-slate-100 to-red-500 uppercase tracking-tighter">
            Summer 2026 Italy Tour
          </h1>
          <div className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-1.5 text-xs font-bold text-slate-300 shadow-sm uppercase tracking-widest">
             <span>June 18 - July 3</span>
          </div>
        </motion.div>

        <TripCountdown />

        {/* Dashboard Tabs */}
        <div className="glass-panel p-1.5 mb-6 flex overflow-x-auto hide-scrollbar rounded-xl gap-1">
          <button
            onClick={() => setActiveTab('Packing')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Packing' 
                ? 'bg-emerald-500/20 text-emerald-400 shadow-sm border border-emerald-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Briefcase className="w-4 h-4 sm:w-4 sm:h-4" />
            PACKING
          </button>
          <button
            onClick={() => setActiveTab('Laundry')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Laundry' 
                ? 'bg-slate-100/10 text-slate-100 shadow-sm border border-slate-100/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Droplets className="w-4 h-4 sm:w-4 sm:h-4" />
            LAUNDRY
          </button>
          <button
            onClick={() => setActiveTab('Itinerary')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Itinerary' 
                ? 'bg-red-500/20 text-red-400 shadow-sm border border-red-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <CalendarDays className="w-4 h-4 sm:w-4 sm:h-4" />
            ITINERARY
          </button>
          <button
            onClick={() => setActiveTab('Emergency')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Emergency' 
                ? 'bg-amber-500/20 text-amber-400 shadow-sm border border-amber-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldAlert className="w-4 h-4 sm:w-4 sm:h-4" />
            EMERGENCY
          </button>
          <button
            onClick={() => setActiveTab('Phrases')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Phrases' 
                ? 'bg-indigo-500/20 text-indigo-400 shadow-sm border border-indigo-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <MessageCircle className="w-4 h-4 sm:w-4 sm:h-4" />
            PHRASES
          </button>
          <button
            onClick={() => setActiveTab('Tips')}
            className={`min-w-[4.5rem] flex-1 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 text-[9px] sm:text-xs font-bold rounded-lg transition-all ${
              activeTab === 'Tips' 
                ? 'bg-teal-500/20 text-teal-400 shadow-sm border border-teal-500/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Lightbulb className="w-4 h-4 sm:w-4 sm:h-4" />
            TIPS
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'Packing' && (
              <motion.div
                key="packing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <PackingChecklist />
              </motion.div>
            )}
            
            {activeTab === 'Laundry' && (
              <motion.div
                key="laundry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <LaundryStrategy />
              </motion.div>
            )}

            {activeTab === 'Itinerary' && (
              <motion.div
                key="itinerary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ItineraryTimeline />
              </motion.div>
            )}

            {activeTab === 'Emergency' && (
              <motion.div
                key="emergency"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <EmergencyTab />
              </motion.div>
            )}

            {activeTab === 'Phrases' && (
              <motion.div
                key="phrases"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <PhrasesTab />
              </motion.div>
            )}

            {activeTab === 'Tips' && (
              <motion.div
                key="tips"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <TravelTipsTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-slate-600 flex flex-col items-center gap-2 pb-8">
          <Plane className="w-5 h-5 text-slate-700" />
          <p className="text-[10px] uppercase tracking-widest font-bold">Have a safe trip</p>
        </div>
      </main>
    </div>
  );
}

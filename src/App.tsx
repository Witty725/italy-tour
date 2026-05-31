import { useState } from 'react';
import { LaundryStrategy } from './components/LaundryStrategy';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { PackingChecklist } from './components/PackingChecklist';
import { EmergencyTab } from './components/EmergencyTab';
import { TripCountdown } from './components/TripCountdown';
import { PhrasesTab } from './components/PhrasesTab';
import { TravelTipsTab } from './components/TravelTipsTab';
import { HomeTab } from './components/HomeTab';
import { Home, Plane, Map, Briefcase, Droplets, CalendarDays, ShieldAlert, MessageCircle, Lightbulb, Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'Home' | 'Itinerary' | 'Packing' | 'Laundry' | 'Tips' | 'Phrases' | 'Emergency';

export default function App() {
  const [activeTab, setActiveTab ] = useState<Tab>('Home');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-2xl mx-auto px-4 py-8 pb-32 pt-12 sm:pt-16 animate-fade-in relative">
        {/* Universal Top-Left Camera Shared Album Pinned Action Button */}
        <button
          onClick={() => setShowPhotoModal(true)}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-md z-30 border cursor-pointer bg-orange-950/30 text-orange-400 border-orange-500/30 hover:bg-orange-900/40 hover:text-white animate-fade-in"
          id="btn-camera-top-left"
          title="Shared Photo Gallery"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Photos</span>
        </button>

        {/* Universal Top-Right Emergency Pinned Action Button */}
        <button
          onClick={() => setActiveTab('Emergency')}
          className={`absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-md z-30 border cursor-pointer ${
            activeTab === 'Emergency'
              ? 'bg-red-500 text-white border-red-400 font-extrabold shadow-red-500/20'
              : 'bg-red-950/30 text-red-400 border-red-500/30 hover:bg-red-900/40 hover:text-white'
          }`}
          id="btn-emergency-top-right"
        >
          <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
          <span>Emergency</span>
        </button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-8"
        >
          <div className="flex justify-center mb-3">
            <div className="relative w-full max-w-sm sm:max-w-md h-24 sm:h-28 bg-gradient-to-b from-sky-950/20 via-slate-950/40 to-slate-950/70 rounded-2xl border border-slate-800/80 p-0 overflow-hidden flex items-end justify-center shadow-lg shadow-emerald-950/10">
              <svg viewBox="0 0 400 100" className="w-full h-full select-none pointer-events-none">
                <defs>
                  {/* Background warm sky glow */}
                  <radialGradient id="sky-glow" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                    <stop offset="60%" stopColor="#818cf8" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                  </radialGradient>
                  {/* Sun glow */}
                  <linearGradient id="sun-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                  </linearGradient>
                  {/* Hill Gradients */}
                  <linearGradient id="hill-back" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#064e3b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#022c22" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="hill-mid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#047857" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#022c22" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="hill-front" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#064e3b" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* Sky glow */}
                <rect width="400" height="100" fill="url(#sky-glow)" />

                {/* Glorious rising sun behind the hills */}
                <circle cx="200" cy="65" r="22" fill="url(#sun-gradient)" />
                <circle cx="200" cy="65" r="35" fill="#eab308" opacity="0.06" filter="blur(4.5px)" />

                {/* Left: Tilted Tower of Pisa (Tilted group) */}
                <g transform="translate(30, 15) rotate(-6 35 70)">
                  {/* Base step */}
                  <rect x="15" y="72" width="40" height="4" rx="1" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
                  {/* Body Tiers */}
                  <rect x="19" y="61" width="32" height="11" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  <rect x="20" y="52" width="30" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  <rect x="21" y="43" width="28" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  <rect x="22" y="34" width="26" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  <rect x="23" y="25" width="24" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  <rect x="24" y="16" width="22" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  {/* Bell chamber tier */}
                  <rect x="26" y="8" width="18" height="8" fill="#1e293b" stroke="#475569" strokeWidth="0.75" />
                  <path d="M28 8 Q35 0 42 8 Z" fill="#475569" opacity="0.8" />
                  
                  {/* Columns details of Tier 1 */}
                  <line x1="23" y1="62" x2="23" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="27" y1="62" x2="27" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="31" y1="62" x2="31" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="35" y1="62" x2="35" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="39" y1="62" x2="39" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="43" y1="62" x2="43" y2="71" stroke="#475569" strokeWidth="1" />
                  <line x1="47" y1="62" x2="47" y2="71" stroke="#475569" strokeWidth="1" />

                  {/* Columns details of interior tiers */}
                  <circle cx="25" cy="56.5" r="1" fill="#475569" />
                  <circle cx="30" cy="56.5" r="1" fill="#475569" />
                  <circle cx="35" cy="56.5" r="1" fill="#475569" />
                  <circle cx="40" cy="56.5" r="1" fill="#475569" />
                  <circle cx="45" cy="56.5" r="1" fill="#475569" />
                  
                  <circle cx="26" cy="47.5" r="1" fill="#475569" />
                  <circle cx="31" cy="47.5" r="1" fill="#475569" />
                  <circle cx="36" cy="47.5" r="1" fill="#475569" />
                  <circle cx="41" cy="47.5" r="1" fill="#475569" />
                  <circle cx="44" cy="47.5" r="1" fill="#475569" />

                  <circle cx="27" cy="38.5" r="1" fill="#475569" />
                  <circle cx="31" cy="38.5" r="1" fill="#475569" />
                  <circle cx="35" cy="38.5" r="1" fill="#475569" />
                  <circle cx="39" cy="38.5" r="1" fill="#475569" />
                  <circle cx="43" cy="38.5" r="1" fill="#475569" />
                </g>

                {/* Tuscan hills rolling curves */}
                <path d="M80 90 Q140 50 200 68 T320 90 Z" fill="url(#hill-back)" />
                <path d="M60 90 Q150 42 240 62 T340 90 Z" fill="url(#hill-mid)" />
                <path d="M90 90 Q170 55 210 70 T310 90 Z" fill="url(#hill-front)" />

                {/* Classic Tuscan Cypress trees */}
                {/* Left grove */}
                <path d="M125 90 Q127.5 45 128.5 45 Q129.5 45 132 90 Z" fill="#064e3b" stroke="#047857" strokeWidth="0.5" />
                <path d="M132 90 Q134.5 50 135.5 50 Q136.5 50 139 90 Z" fill="#022c22" />
                <path d="M119 90 Q121 55 122 55 Q123 55 125 90 Z" fill="#022c22" opacity="0.8" />
                
                {/* Center: Pontremoli Piagnaro Castle */}
                <g transform="translate(162, 53)">
                  {/* Left smaller tower */}
                  <rect x="0" y="12" width="7" height="15" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
                  {/* Crenellations/Battlements on left tower */}
                  <rect x="-1" y="10" width="9" height="2" fill="#475569" />
                  
                  {/* Main castle body */}
                  <rect x="5" y="16" width="18" height="11" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                  {/* Castle Gate */}
                  <path d="M 11 27 A 2 2 0 0 1 15 27 Z" fill="#090d16" stroke="#475569" strokeWidth="0.5" />

                  {/* Main Tall Tower */}
                  <rect x="18" y="3" width="8" height="24" fill="#1e293b" stroke="#475569" strokeWidth="0.5" />
                  {/* Tower roof/top battlements */}
                  <rect x="17" y="1" width="10" height="2" fill="#334155" />
                  
                  {/* High flag flying on the tower */}
                  <line x1="25" y1="1" x2="25" y2="-4" stroke="#eab308" strokeWidth="0.5" />
                  <polygon points="25,-4 29,-2 25,0" fill="#ef4444" />

                  {/* Tiny arched windows */}
                  <rect x="21" y="7" width="1.5" height="3" rx="0.5" fill="#090d16" />
                </g>
                <path d="M195 90 Q196.5 60 197.5 60 Q198.5 60 200 90 Z" fill="#022c22" />

                {/* Right grove */}
                <path d="M246 90 Q248 48 249 48 Q250 48 252 90 Z" fill="#064e3b" stroke="#047857" strokeWidth="0.5" />
                <path d="M253 90 Q255 42 256 42 Q257 42 259 90 Z" fill="#022c22" />
                <path d="M260 90 Q262 55 263 55 Q264 55 266 90 Z" fill="#064e3b" opacity="0.9" />

                {/* Right: Cruise Ship Silhouette */}
                <g transform="translate(310, 65.4) scale(0.6)">
                  {/* Hull of the ship block */}
                  <path d="M 0 41 L 105 41 Q 115 41 120 28 L 125 18 L 10 18 Z" fill="#0f172a" stroke="#475569" strokeWidth="0.75" />
                  {/* White-stripe hull accent */}
                  <path d="M 8 18 L 122 18 L 118 24 L 6 24 Z" fill="#1e293b" />
                  {/* Decks */}
                  <rect x="15" y="8" width="100" height="10" fill="#1e293b" stroke="#475569" strokeWidth="0.5" />
                  <rect x="25" y="-1" width="80" height="9" fill="#0f172a" stroke="#475569" strokeWidth="0.5" />
                  <rect x="35" y="-8" width="60" height="7" fill="#1e293b" stroke="#475569" strokeWidth="0.5" />
                  
                  {/* Red/Yellow Funnel */}
                  <polygon points="50,-8 53,-16 62,-16 59,-8" fill="#ef4444" />
                  <rect x="52" y="-19" width="10" height="3" fill="#111827" />

                  {/* Cabin lights (glowing yellow dots) */}
                  <circle cx="22" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="30" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="38" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="46" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="54" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="62" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="70" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="78" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="86" cy="13" r="1" fill="#f59e0b" />
                  <circle cx="94" cy="13" r="1" fill="#f59e0b" />

                  <circle cx="30" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="38" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="46" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="54" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="62" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="70" cy="4" r="1" fill="#ffffff" opacity="0.9" />
                  <circle cx="78" cy="4" r="1" fill="#ffffff" opacity="0.9" />

                  {/* Water ripple line */}
                  <path d="M -15 41 Q 45 44 135 41" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 2" />
                </g>

                {/* Flat base-line road shadow */}
                <rect x="0" y="89" width="400" height="1.5" fill="#1e293b" />

                {/* High-fidelity glowing LED Italian Flag stripes at the absolute base */}
                <rect x="0" y="97" width="133.3" height="3" fill="#10b981" opacity="0.8" />
                <rect x="133.3" y="97" width="133.4" height="3" fill="#ffffff" opacity="0.8" />
                <rect x="266.7" y="97" width="133.3" height="3" fill="#ef4444" opacity="0.8" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-slate-100 to-red-400 uppercase tracking-tighter">
            Summer 2026 Italy Tour
          </h1>
          <div className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-full px-4 py-1.5 text-xs font-bold text-slate-300 shadow-sm uppercase tracking-widest">
             <span>June 18 - July 3</span>
          </div>
        </motion.div>

        {/* Dynamic Trip Countdown (Only shown on the Home Tab) */}
        {activeTab === 'Home' && <TripCountdown />}

        {/* Dashboard Navigation Tabs */}
        <div className="glass-panel p-1.5 mb-6 flex rounded-xl gap-1 decoration-none">
          <button
            onClick={() => setActiveTab('Home')}
            className={`flex-1 flex items-center justify-center py-3.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'Home' 
                ? 'bg-indigo-500/25 text-indigo-400 border border-indigo-500/25 shadow-md shadow-indigo-500/10' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            title="Home"
          >
            <Home className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('Itinerary')}
            className={`flex-1 flex items-center justify-center py-3.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'Itinerary' 
                ? 'bg-rose-500/25 text-rose-400 border border-rose-500/25 shadow-md shadow-rose-500/10' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            title="Itinerary"
          >
            <CalendarDays className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('Packing')}
            className={`flex-1 flex items-center justify-center py-3.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'Packing' 
                ? 'bg-emerald-500/25 text-emerald-400 border border-emerald-500/25 shadow-md shadow-emerald-500/10' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            title="Packing"
          >
            <Briefcase className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('Tips')}
            className={`flex-1 flex items-center justify-center py-3.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'Tips' 
                ? 'bg-teal-500/25 text-teal-400 border border-teal-500/25 shadow-md shadow-teal-500/10' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            title="Tips"
          >
            <Lightbulb className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('Phrases')}
            className={`flex-1 flex items-center justify-center py-3.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'Phrases' 
                ? 'bg-amber-500/25 text-amber-400 border border-amber-500/25 shadow-md shadow-amber-500/10' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            title="Phrases"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'Home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <HomeTab onNavigate={setActiveTab} />
              </motion.div>
            )}

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
          <p className="text-[10px] uppercase tracking-widest font-black">Buon Viaggio • Have a safe trip</p>
        </div>
      </main>

      {/* Shared Google Photos Modal */}
      <AnimatePresence>
        {showPhotoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowPhotoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header block with camera illustration accent */}
              <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent p-6 border-b border-slate-800/80 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <Camera className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm uppercase tracking-wider">Family Shared Album</h3>
                    <p className="text-[11px] text-slate-400 font-medium">Google Photos • Italy Summer 2026</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  id="close-photo-modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Instructions and Details */}
              <div className="p-6 flex flex-col gap-4 text-xs sm:text-sm">
                <p className="text-slate-300 leading-relaxed text-justify">
                  Capture some amazing shots during our trip? Share them on our <span className="text-orange-400 font-extrabold">family-shared Google Photos Library</span> so everyone on the tour can enjoy and preserve these memories!
                </p>

                <div className="flex flex-col gap-2.5 bg-slate-950 p-4 rounded-xl border border-slate-850">
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1">
                    How to Upload Your Photos
                  </span>
                  
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-black text-orange-400 shrink-0 mt-0.5">1</span>
                    <p className="text-slate-350 text-[11px] sm:text-xs leading-snug">
                      Tap the <span className="text-white font-bold">Open Shared Album</span> button below to view the shared collection.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-black text-orange-400 shrink-0 mt-0.5">2</span>
                    <p className="text-slate-350 text-[11px] sm:text-xs leading-snug">
                      Tap the <span className="text-white font-bold">"Join"</span> button at the top to enable uploading with your Google account.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-black text-orange-400 shrink-0 mt-0.5">3</span>
                    <p className="text-slate-350 text-[11px] sm:text-xs leading-snug">
                      Click the <span className="text-white font-bold">Add photos</span> symbol (the picture icon with a <span className="text-orange-400 font-black">+</span>) at the top of the album.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-black text-orange-400 shrink-0 mt-0.5">4</span>
                    <p className="text-slate-350 text-[11px] sm:text-xs leading-snug">
                      Select your favorite vacation memories and click <span className="text-white font-bold">"Done"</span> / <span className="text-white font-bold">"Add"</span> to publish them immediately so the whole family can see them!
                    </p>
                  </div>
                </div>

                {/* Primary Action Call to Google Photos */}
                <a
                  href="https://photos.app.goo.gl/4KZkoSxz4qcSHMXJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="mt-2 w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl text-center shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="open-shared-photos-album"
                >
                  <Camera className="w-4.5 h-4.5" />
                  <span>Open Shared Album</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

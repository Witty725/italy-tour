import { CalendarDays, AlertTriangle, ThermometerSun } from 'lucide-react';
import { itinerary } from '../data';
import { motion } from 'motion/react';

export function ItineraryTimeline() {
  return (
    <div className="glass-panel p-4">
      <h3 className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
        Itinerary Timeline
      </h3>
      
      <div className="relative overflow-hidden">
        {/* Itinerary line */}
        <div className="absolute left-[5px] top-2 bottom-0 w-[2px] bg-indigo-950 z-10"></div>
        
        <div className="flex flex-col gap-5 pr-2 z-20 relative">
          {itinerary.map((day, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={day.date} 
              className="relative pl-6"
            >
              <div className={`absolute left-0 top-1 w-3 h-3 rounded-full ring-4 ring-slate-900 z-20 ${day.warning ? 'bg-amber-500' : 'bg-indigo-600'}`}></div>
              
              <div className={`text-xs uppercase tracking-wider ${day.warning ? 'text-amber-500 font-bold' : 'text-slate-400'}`}>{day.date.split(',')[0]}</div>
              <div className="font-bold text-sm text-slate-100">{day.location}</div>
              
              <div className="text-[10px] md:text-sm mt-1.5 bg-slate-800 p-2.5 rounded border border-slate-700/50 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-slate-300">
                  <ThermometerSun className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-mono text-amber-500/90 font-semibold">H:{day.highF}°</span>
                  <span className="font-mono text-cyan-600/90 font-semibold">L:{day.lowF}°</span>
                  <span className="truncate border-l border-slate-600 pl-2 leading-none">{day.weather}</span>
                </div>
                
                {day.warning && (
                  <div className="mt-1 bg-red-950/80 border border-red-700 p-2 rounded text-red-200 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-xs leading-tight">{day.warning}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

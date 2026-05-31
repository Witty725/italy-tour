import { Droplets, Info } from 'lucide-react';
import { laundryStrategy } from '../data';

export function LaundryStrategy() {
  return (
    <div className="glass-panel p-4 bg-indigo-950/20 border-indigo-500/30">
      <h3 className="text-indigo-300 text-[10px] font-bold uppercase mb-3 flex items-center gap-2">
        <Droplets className="w-4 h-4 text-emerald-400" />
        Laundry Strategy Summary
      </h3>
      <div className="flex flex-col gap-3">
        {laundryStrategy.map((phase) => (
          <div key={phase.id} className="flex gap-3 items-start border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
            <div className="flex-1">
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">{phase.dates} • {phase.location}</div>
              <div className="text-xs leading-tight font-medium mt-1 text-slate-200">
                {phase.rules}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

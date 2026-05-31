import { MessageCircle, Volume2 } from 'lucide-react';

const phrases = [
  { it: 'Buongiorno', en: 'Good morning' },
  { it: 'Per favore', en: 'Please' },
  { it: 'Grazie mille', en: 'Thank you very much' },
  { it: 'Parla inglese?', en: 'Do you speak English?' },
  { it: "Dov'è il bagno?", en: 'Where is the bathroom?' },
  { it: 'Il conto, per favore', en: 'The check, please' },
  { it: 'Un caffè, per favore', en: 'A coffee, please' },
  { it: 'Quanto costa?', en: 'How much does this cost?' },
  { it: 'Ottimo!', en: 'Excellent / Great!' },
];

export function PhrasesTab() {
  return (
    <div className="glass-panel p-4 outline-none">
      <h3 className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
        <MessageCircle className="w-4 h-4" />
        Quick Italian Phrases
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-slate-700/50">
        {phrases.map((phrase, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 transition-colors group cursor-pointer shadow-sm">
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-slate-100 text-sm sm:text-base">{phrase.it}</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{phrase.en}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors border border-indigo-500/20">
              <Volume2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Volume2, 
  Sparkles, 
  MapPin, 
  ShoppingBag, 
  UtensilsCrossed, 
  Heart, 
  HelpCircle,
  Bookmark
} from 'lucide-react';

interface Phrase {
  it: string;
  en: string;
  pronunciation?: string;
  category: 'Greetings' | 'Courtesies' | 'Ordering Food' | 'Shopping' | 'Directions & Help';
}

const phrasesData: Phrase[] = [
  // Greetings
  { it: 'Buongiorno', en: 'Good morning / Hello', pronunciation: 'bwon-joor-no', category: 'Greetings' },
  { it: 'Buonasera', en: 'Good evening', pronunciation: 'bwo-nah-seh-rah', category: 'Greetings' },
  { it: 'Ciao', en: 'Hello / Bye', pronunciation: 'chow', category: 'Greetings' },
  { it: 'Arrivederci', en: 'Goodbye (formal)', pronunciation: 'ah-ree-veh-dehr-chee', category: 'Greetings' },
  { it: 'Ci vediamo!', en: 'See you!', pronunciation: 'chee veh-dyah-mo', category: 'Greetings' },
  { it: 'Come sta?', en: 'How are you? (formal)', pronunciation: 'ko-meh stah', category: 'Greetings' },
  { it: 'Tutto bene?', en: 'All good?', pronunciation: 'toot-to beh-neh', category: 'Greetings' },

  // Courtesies
  { it: 'Per favore', en: 'Please', pronunciation: 'pehr fah-vo-reh', category: 'Courtesies' },
  { it: 'Grazie mille', en: 'Thank you very much', pronunciation: 'grah-tsyeh meel-leh', category: 'Courtesies' },
  { it: 'Prego', en: 'You\'re welcome', pronunciation: 'preh-go', category: 'Courtesies' },
  { it: 'Mi dispiace', en: 'I am sorry', pronunciation: 'mee dees-pyah-cheh', category: 'Courtesies' },
  { it: 'Permesso', en: 'Excuse me (passing through)', pronunciation: 'pehr-mehs-so', category: 'Courtesies' },
  { it: 'Scusi', en: 'Excuse me (get attention - formal)', pronunciation: 'skoo-zee', category: 'Courtesies' },
  { it: 'Ottimo!', en: 'Excellent!', pronunciation: 'ot-tee-mo', category: 'Courtesies' },

  // Ordering Food
  { it: 'Il conto, per favore', en: 'The check, please', pronunciation: 'eel kon-to pehr fah-vo-reh', category: 'Ordering Food' },
  { it: 'Un caffè, per favore', en: 'A coffee, please', pronunciation: 'oon kahf-feh pehr fah-vo-reh', category: 'Ordering Food' },
  { it: 'Un tavolo per due', en: 'A table for two', pronunciation: 'oon tah-vo-lo pehr doo-eh', category: 'Ordering Food' },
  { it: 'Vorrei ordinare...', en: 'I would like to order...', pronunciation: 'vor-ray or-dee-nah-reh', category: 'Ordering Food' },
  { it: 'Vino rosso / bianco', en: 'Red / white wine', pronunciation: 'vee-no ros-so / byahn-ko', category: 'Ordering Food' },
  { it: 'Acqua naturale / frizzante', en: 'Still / sparkling water', pronunciation: 'ah-kwah nah-too-rah-leh / freets-tsahn-teh', category: 'Ordering Food' },
  { it: 'Senza glutine', en: 'Gluten-free', pronunciation: 'sen-tsah gloo-tee-neh', category: 'Ordering Food' },
  { it: 'È delizioso!', en: 'It is delicious!', pronunciation: 'eh deh-lee-tsyoh-zo', category: 'Ordering Food' },

  // Shopping
  { it: 'Quanto costa?', en: 'How much does this cost?', pronunciation: 'kwan-to kos-tah', category: 'Shopping' },
  { it: 'Posso pagare con la carta?', en: 'Can I pay with card?', pronunciation: 'pos-so pah-gah-reh kon lah kahr-tah', category: 'Shopping' },
  { it: 'Sto solo guardando, grazie', en: 'I\'m just looking, thank you', pronunciation: 'sto soh-lo gwahr-dahn-do grah-tsyeh', category: 'Shopping' },
  { it: 'Avete una taglia più grande?', en: 'Do you have a bigger size?', pronunciation: 'ah-veh-teh oo-nah tahl-yah pyoo grahn-deh', category: 'Shopping' },
  { it: 'Vorrei comprare questo', en: 'I would like to buy this', pronunciation: 'vor-ray kom-prah-reh kwehs-to', category: 'Shopping' },
  { it: 'Scontrino, per favore', en: 'Receipt, please', pronunciation: 'skon-tree-no pehr fah-vo-reh', category: 'Shopping' },

  // Directions & Help
  { it: 'Dov\'è il bagno?', en: 'Where is the bathroom?', pronunciation: 'do-veh eel bahn-yo', category: 'Directions & Help' },
  { it: 'Parla inglese?', en: 'Do you speak English?', pronunciation: 'pahr-lah een-gleh-zeh', category: 'Directions & Help' },
  { it: 'Non capisco', en: 'I don\'t understand', pronunciation: 'non kah-pees-ko', category: 'Directions & Help' },
  { it: 'Può aiutarmi?', en: 'Can you help me?', pronunciation: 'pwoh eye-oo-tahr-mee', category: 'Directions & Help' },
  { it: 'Dove siamo?', en: 'Where are we?', pronunciation: 'do-veh syah-mo', category: 'Directions & Help' },
  { it: 'Dov\'è la stazione?', en: 'Where is the station?', pronunciation: 'do-veh lah stah-tsyoh-neh', category: 'Directions & Help' },
  { it: 'Mi sono perso', en: 'I am lost', pronunciation: 'mee so-no pehr-so', category: 'Directions & Help' },
];

const categories = ['All', 'Greetings', 'Courtesies', 'Ordering Food', 'Shopping', 'Directions & Help'] as const;

export function PhrasesTab() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);

  const handleSpeak = (itText: string, idx: number) => {
    if ('speechSynthesis' in window) {
      // Cancel previous speak runs
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(itText);
      utterance.lang = 'it-IT';
      utterance.rate = 0.85; // slightly slower for optimal learning
      
      utterance.onstart = () => setSpeakingIdx(idx);
      utterance.onend = () => setSpeakingIdx(null);
      utterance.onerror = () => setSpeakingIdx(null);
      
      window.speechSynthesis.speak(utterance);
    } else {
      // Small fallback notification or visual spike
      setSpeakingIdx(idx);
      setTimeout(() => setSpeakingIdx(null), 1000);
    }
  };

  const filteredPhrases = activeCategory === 'All' 
    ? phrasesData 
    : phrasesData.filter(p => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Greetings':
        return <Bookmark className="w-3.5 h-3.5" />;
      case 'Courtesies':
        return <Heart className="w-3.5 h-3.5" />;
      case 'Ordering Food':
        return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'Shopping':
        return <ShoppingBag className="w-3.5 h-3.5" />;
      case 'Directions & Help':
        return <MapPin className="w-3.5 h-3.5" />;
      default:
        return <MessageCircle className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search Header Info */}
      <div className="glass-panel p-4 bg-indigo-950/20 border-indigo-505/20">
        <h3 className="text-emerald-400 font-black text-xs uppercase tracking-widest flex items-center gap-2 mb-1.5 font-sans">
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
          Interactive Italian Phrasebook
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Tap any phrase card below to hear the <span className="font-bold text-emerald-400">audible Italian pronunciations</span> spoken out loud at a comfortable tutoring speed!
        </p>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none shrink-0 -mx-1 px-1">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border leading-none ${
                isActive 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-md shadow-rose-500/5 font-extrabold' 
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800/80 hover:text-slate-200'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid displays filtered phrases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-slate-700/50">
        <AnimatePresence mode="popLayout">
          {filteredPhrases.map((phrase, idx) => {
            const isSpeaking = speakingIdx === idx;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                key={phrase.it}
                onClick={() => handleSpeak(phrase.it, idx)}
                className={`flex justify-between items-center p-3.5 rounded-xl border transition-all group cursor-pointer shadow-sm select-none ${
                  isSpeaking
                    ? 'border-emerald-500 bg-emerald-950/20 scale-[1.01] shadow-lg shadow-emerald-950/30'
                    : 'border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700/50'
                }`}
                id={`phrase-${phrase.it.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="flex flex-col gap-1 pr-2">
                  <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 leading-none">
                    {phrase.category}
                  </span>
                  <span className="font-extrabold text-slate-100 text-sm sm:text-base tracking-tight leading-tight">
                    {phrase.it}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold leading-snug">
                    {phrase.en}
                  </span>
                  {phrase.pronunciation && (
                    <span className="text-[9px] font-mono opacity-80 text-emerald-400 mt-0.5 leading-none bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 w-fit">
                      [{phrase.pronunciation}]
                    </span>
                  )}
                </div>
                
                {/* Voice Speaker Circle icon */}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border shrink-0 ${
                  isSpeaking
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-bounce'
                    : 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 border-indigo-500/20'
                }`}>
                  <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

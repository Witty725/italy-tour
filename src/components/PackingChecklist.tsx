import { useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { packingList } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['Documents & Finance', 'Packing Essentials', 'Electronics & Gear'];

export function PackingChecklist() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [checkedItems, setCheckedItems] = useLocalStorage<Record<string, boolean>>('packingProgress', {});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const progress = useMemo(() => {
    const total = packingList.length;
    const completed = Object.values(checkedItems).filter(Boolean).length;
    return {
      total,
      completed,
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
    };
  }, [checkedItems]);

  const currentCategoryItems = useMemo(() => {
    return packingList.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-4">
      {/* Progress Panel */}
      <div className="glass-panel p-4 flex flex-col justify-between">
        <div className="flex justify-between items-end">
          <h3 className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Packing Progress</h3>
          <span className="text-emerald-400 text-lg font-black leading-none">{progress.percentage}%</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
          <motion.div 
            className="bg-emerald-500 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress.percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Main Checklist Panel */}
      <div className="glass-panel flex-1 flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-800">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-3 text-xs font-bold whitespace-nowrap transition-colors relative ${
                activeTab === cat 
                  ? 'text-amber-500 bg-amber-500/10 border-b-2 border-amber-500' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Checklist Items */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {currentCategoryItems.map((item) => {
              const isChecked = !!checkedItems[item.id];
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-indigo-500/10 transition-colors group"
                >
                  <div className={`w-5 h-5 flex-shrink-0 border-2 rounded ${
                    isChecked 
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-black' 
                      : 'border-slate-600 group-hover:border-slate-400'
                  }`}>
                    {isChecked && '✓'}
                  </div>
                  <span 
                    className={`text-sm leading-tight transition-all duration-300 ${
                      isChecked 
                        ? 'text-slate-400 line-through opacity-50' 
                        : 'text-slate-200'
                    }`}
                  >
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

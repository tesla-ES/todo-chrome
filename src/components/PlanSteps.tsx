import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { stepsData } from '../data/planData';
import { PlanStep } from '../types';
import { CheckCircle, Clock, ChevronDown, ChevronUp, CalendarRange } from 'lucide-react';

export default function PlanSteps() {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    // Load state from localStorage if available
    try {
      const saved = localStorage.getItem('chrome_ext_completed_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedStep, setExpandedStep] = useState<string | null>('step1');
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('chrome_ext_completed_steps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  const toggleStepCompleted = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid expanding/collapsing when clicking checkbox
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleExpand = (id: string) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const getDifficultyColor = (difficulty: PlanStep['difficulty']) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Medium': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Hard': return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  const totalSteps = stepsData.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100);

  const filteredSteps = stepsData.filter(step => {
    if (filter === 'all') return true;
    if (filter === 'completed') return completedSteps[step.id];
    if (filter === 'pending') return !completedSteps[step.id];
    return true;
  });

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="roadmap-section">
      {/* Header and Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
            <CalendarRange size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 font-sans">خارطة الطريق وخطة العمل التفصيلية</h2>
            <p className="text-xs text-slate-500 mt-1 font-sans">تتبع تقدمك في تطوير الإضافة وقم بتعليم الخطوات المنتهية لتحديث مؤشر الإنجاز.</p>
          </div>
        </div>

        {/* Progress Display */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl min-w-[220px]">
          <div className="w-full">
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-500 font-sans">مستوى الإنجاز</span>
              <span className="text-blue-600 font-mono font-bold">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
            filter === 'all' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'
          }`}
        >
          الكل ({totalSteps})
        </button>
        <button 
          onClick={() => setFilter('pending')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
            filter === 'pending' 
              ? 'bg-amber-600 text-white shadow-sm' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'
          }`}
        >
          قيد التنفيذ ({totalSteps - completedCount})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
            filter === 'completed' 
              ? 'bg-emerald-600 text-white shadow-sm' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'
          }`}
        >
          الخطوات المكتملة ({completedCount})
        </button>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {filteredSteps.map((step, index) => {
            const isCompleted = !!completedSteps[step.id];
            const isExpanded = expandedStep === step.id;

            return (
              <motion.div
                key={step.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-slate-300 bg-slate-50/80 shadow-inner' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Expandable Header */}
                <div 
                  onClick={() => toggleExpand(step.id)}
                  className="p-5 flex items-center justify-between cursor-pointer gap-4 select-none"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Done Checkbox */}
                    <button
                      onClick={(e) => toggleStepCompleted(step.id, e)}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                        isCompleted 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-700 font-bold' 
                          : 'border-slate-300 hover:border-slate-400 text-transparent'
                      }`}
                    >
                      <CheckCircle size={16} className={isCompleted ? 'opacity-100' : 'opacity-0'} />
                    </button>

                    {/* Step Number & Title */}
                    <div className="text-right">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-extrabold text-slate-400">PHASE 0{index + 1}</span>
                        <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded border ${getDifficultyColor(step.difficulty)}`}>
                          {step.difficulty}
                        </span>
                      </div>
                      <h3 className={`text-sm md:text-base font-bold font-sans mt-0.5 transition-all ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-1 line-clamp-1">{step.description}</p>
                    </div>
                  </div>

                  {/* Metadata & Icon togglers */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 text-slate-500 text-xs font-mono font-bold">
                      <Clock size={13} />
                      <span>{step.duration}</span>
                    </div>
                    <div>
                      {isExpanded ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-slate-200 bg-white p-5 md:p-6"
                  >
                    <div className="space-y-4">
                      <div className="bg-slate-50 border border-slate-150 rounded-lg p-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">الوصف التفصيلي:</h4>
                        <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-sans">{step.description}</p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">خطوات التنفيذ والإنجاز:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-xs text-slate-600 leading-relaxed font-sans">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredSteps.length === 0 && (
          <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 text-sm font-sans">
            لا توجد خطوات متطابقة مع التصفية الحالية.
          </div>
        )}
      </div>
    </div>
  );
}

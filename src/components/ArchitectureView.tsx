import { useState } from 'react';
import { motion } from 'motion/react';
import { architectureNodes } from '../data/planData';
import { ArchitectureNode } from '../types';
import { Network, ArrowLeftRight, Database, Chrome, Server, Globe } from 'lucide-react';

export default function ArchitectureView() {
  const [activeNode, setActiveNode] = useState<string>('popup');

  const selectedNode = architectureNodes.find(n => n.id === activeNode) || architectureNodes[0];

  const getNodeIcon = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'extension': return <Chrome className="text-blue-600" size={24} />;
      case 'backend': return <Server className="text-amber-600" size={24} />;
      case 'storage': return <Database className="text-emerald-600" size={24} />;
      case 'web': return <Globe className="text-purple-600" size={24} />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="architecture-section">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 border border-blue-200 text-blue-600 rounded-lg">
          <Network size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800 font-sans">بنية النظام والتدفق البرمجي (Architecture Flow)</h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">اضغط على أي جزء من أجزاء المخطط لفهم كيفية تفاعل الإضافة مع خادم Scrapling والذاكرة المحلية.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Map (Columns 1-7) */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 relative min-h-[300px] flex flex-col justify-center items-center">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative z-10">
            {architectureNodes.map((node) => {
              const isActive = node.id === activeNode;
              return (
                <motion.button
                  key={node.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveNode(node.id)}
                  className={`text-right p-4 rounded-xl border transition-all flex flex-col gap-2 relative cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50/80 border-blue-500 shadow-sm shadow-blue-500/10' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      {getNodeIcon(node.type)}
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm font-sans">{node.title}</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{node.titleEn}</p>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed mt-1 font-sans">
                    {node.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Connection Arrows Helper Label */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <ArrowLeftRight size={180} className="text-slate-400" />
          </div>

          <div className="mt-6 flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-xs text-slate-500 font-sans shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>جميع الطلبات والبيانات تدار محلياً بشكل فوري لضمان الخصوصية وسرعة الأداء.</span>
          </div>
        </div>

        {/* Detailed Explanation Panel (Columns 8-12) */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px] flex flex-col justify-between">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                {getNodeIcon(selectedNode.type)}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 font-sans">{selectedNode.title}</h3>
                <span className="text-xs text-blue-600 font-mono">{selectedNode.titleEn}</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans mb-4">
              {selectedNode.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-wider font-sans">المهام والخصائص البرمجية:</h4>
              <ul className="space-y-2">
                {selectedNode.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed font-sans">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-400 text-center font-sans">
            انقر على الأقسام الأخرى في الجهة المقابلة لمعرفة التفاصيل.
          </div>
        </div>
      </div>
    </div>
  );
}

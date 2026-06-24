import { motion } from 'motion/react';
import { Chrome, BrainCircuit, Sparkles, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
      id="header-section"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-600 shadow-inner">
            <Chrome size={36} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight font-sans text-slate-900">
                مستشار إضافات كروم وسحب البيانات
              </h1>
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-medium font-sans">
                نشط • Active
              </span>
            </div>
            <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
              خطة عمل متكاملة، محاكي تفاعلي، ومولد ملفات برمجية Boilerplate لبناء إضافة Chrome ذكية لتنظيم المهام اليومية باستخدام مكتبة <code className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-mono text-xs">Scrapling</code> وقاعدة البيانات المحلية.
            </p>
          </div>
        </div>

        <div className="flex gap-3 self-start md:self-center">
          <a 
            href="#architecture-section"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <BrainCircuit size={14} />
            <span>بنية النظام</span>
          </a>
          <a 
            href="#code-section"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm shadow-blue-900/30 transition-all cursor-pointer"
          >
            <Sparkles size={14} />
            <span>الأكواد الجاهزة</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

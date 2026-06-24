import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chrome, Search, Sparkles, Trash2, Check, RefreshCw, Layers, Database, ShieldCheck } from 'lucide-react';

interface SimulatedTask {
  id: string;
  title: string;
  completed: boolean;
  source: string;
  createdAt: string;
}

const mockPages = [
  {
    id: 'github',
    title: 'مستودع GitHub - قائمة المهام ومشاكل الكود (Issues)',
    url: 'https://github.com/my-project/issues',
    tasks: [
      { id: 't1', title: 'GitHub: إصلاح مشكلة تسجيل الدخول بـ Google Auth', source: 'GitHub Issues', completed: false, createdAt: new Date().toISOString() },
      { id: 't2', title: 'GitHub: تحديث ملفات الاعتماد الأمنية (Secrets)', source: 'GitHub Issues', completed: false, createdAt: new Date().toISOString() },
      { id: 't3', title: 'GitHub: إضافة اختبارات تلقائية لوحدة السحب', source: 'GitHub Issues', completed: true, createdAt: new Date().toISOString() }
    ]
  },
  {
    id: 'trello',
    title: 'لوحة Trello - تخطيط المشروع والمهام المتبقية',
    url: 'https://trello.com/b/task-planner-board',
    tasks: [
      { id: 't4', title: 'Trello: كتابة وثائق تشغيل السيرفر الخارجي', source: 'Trello Board', completed: false, createdAt: new Date().toISOString() },
      { id: 't5', title: 'Trello: مراجعة كفاءة قواعد البيانات المدمجة', source: 'Trello Board', completed: false, createdAt: new Date().toISOString() }
    ]
  },
  {
    id: 'blog',
    title: 'موقع مدونة مراجعة المقالات والكتب اليومية',
    url: 'https://my-blog.com/dashboard/todo',
    tasks: [
      { id: 't6', title: 'قراءة ومراجعة: دليل استخدام Scrapling المتقدم', source: 'صفحة الويب', completed: false, createdAt: new Date().toISOString() },
      { id: 't7', title: 'مراجعة وقراءة: تصميم قواعد البيانات NoSQL للكروم', source: 'صفحة الويب', completed: true, createdAt: new Date().toISOString() }
    ]
  }
];

export default function ExtensionSimulator() {
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
  const [tasks, setTasks] = useState<SimulatedTask[]>([]);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const currentPage = mockPages[selectedPageIndex];

  const handleSimulateScrape = () => {
    setIsScraping(true);
    setTimeout(() => {
      setIsScraping(false);
      
      // Filter out duplicates based on title
      const newSimulatedTasks = currentPage.tasks;
      setTasks(prev => {
        const merged = [...prev];
        newSimulatedTasks.forEach(newTask => {
          if (!merged.some(t => t.title === newTask.title)) {
            merged.unshift(newTask);
          }
        });
        return merged;
      });

      setShowNotification(`نجح السحب! تم جلب ${currentPage.tasks.length} مهام من الصفحة عبر Scrapling API.`);
      setTimeout(() => setShowNotification(null), 4000);
    }, 1500);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="simulator-section">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
          <Layers size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800 font-sans">محاكي الإضافة والـ Scraping التفاعلي</h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">تفاعل مع هذا المحاكي لرؤية آلية عمل إضافة الكروم والـ API معاً بشكل حي ومباشر.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
        
        {/* Left pane - Simulated Active Webpage (6 cols) */}
        <div className="xl:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="text-xs font-bold text-slate-500 font-sans">1. صفحة الويب النشطة حالياً في المتصفح</span>
              <span className="text-3xs px-2.5 py-1 rounded bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono font-bold">Active Tab</span>
            </div>

            {/* Simulated Address Bar */}
            <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2 mb-4 shadow-inner">
              <Search size={14} className="text-slate-400 shrink-0" />
              <div className="text-xs text-slate-600 font-mono truncate select-all w-full text-left">
                {currentPage.url}
              </div>
            </div>

            {/* Page selection dropdown */}
            <div className="mb-4">
              <label className="block text-2xs font-semibold text-slate-500 mb-1.5 font-sans">اختر موقع الويب لمحاكاة السحب منه:</label>
              <select 
                value={selectedPageIndex} 
                onChange={(e) => setSelectedPageIndex(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 text-slate-700 text-xs rounded-lg px-3 py-2.5 outline-none font-sans cursor-pointer focus:border-blue-500"
              >
                {mockPages.map((page, idx) => (
                  <option key={page.id} value={idx}>{page.title}</option>
                ))}
              </select>
            </div>

            {/* Page content view preview */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-4 min-h-[140px] flex flex-col justify-center shadow-sm">
              <h4 className="text-xs font-bold text-slate-500 mb-3 font-sans">المحتوى المتواجد بالصفحة (الذي سيقرأه Scrapling):</h4>
              <div className="space-y-2">
                {currentPage.tasks.map((t, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded border border-slate-100 text-xs text-slate-600">
                    <span className="font-mono text-xs">{t.title}</span>
                    <span className="text-3xs bg-slate-200/60 text-slate-500 px-2 py-0.5 rounded font-mono">DOM Node</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-3xs text-slate-400 leading-relaxed font-sans">
            <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
            <span>عند الضغط على الزر في نافذة الإضافة المجاورة، سيتم محاكاة قراءة هذه الصفحة وإرسالها لخادم الـ API للحصول على هذه المهام.</span>
          </div>
        </div>

        {/* Center/Right pane - Simulated Extension Popup (6 cols) */}
        <div className="xl:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Simulated Extension UI Card (7 cols inside) */}
          <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 shadow-md relative flex flex-col overflow-hidden min-h-[360px]">
            {/* Header / Extension Title */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                  <Chrome size={12} className="text-white" />
                </div>
                <span className="text-xs font-bold font-sans">منظم المهام اليومي</span>
              </div>
              <span className="text-3xs font-mono text-slate-400">v1.0.0</span>
            </div>

            {/* Extension Inside Body */}
            <div className="p-4 flex-1 flex flex-col justify-between bg-slate-50">
              <div>
                {/* Trigger Button */}
                <button
                  onClick={handleSimulateScrape}
                  disabled={isScraping}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  {isScraping ? (
                    <>
                      <RefreshCw className="animate-spin text-white" size={13} />
                      <span className="font-sans">جاري سحب المهام عبر Scrapling...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={13} />
                      <span className="font-sans">✨ سحب وتحليل المهام من الصفحة</span>
                    </>
                  )}
                </button>

                {/* Notifications in simulated popup */}
                {showNotification && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-3xs bg-emerald-50 border border-emerald-200 text-emerald-800 p-2 rounded-md font-sans text-right"
                  >
                    {showNotification}
                  </motion.div>
                )}

                {/* List Container */}
                <div className="mt-4">
                  <div className="flex justify-between items-center text-3xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                    <span>المهام المضافة ({tasks.length})</span>
                    {tasks.length > 0 && (
                      <button 
                        onClick={clearAllTasks}
                        className="text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer font-sans"
                      >
                        <Trash2 size={10} />
                        <span>مسح الكل</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto scrollbar-thin">
                    <AnimatePresence initial={false}>
                      {tasks.map(task => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className={`flex justify-between items-center p-2 rounded-lg border text-xs transition-all ${
                            task.completed 
                              ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-60' 
                              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-2 max-w-[75%]">
                            <button
                              onClick={() => toggleTask(task.id)}
                              className={`w-4.5 h-4.5 rounded border flex items-center justify-center cursor-pointer transition-all ${
                                task.completed 
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                                  : 'border-slate-300 hover:border-slate-400'
                              }`}
                            >
                              {task.completed && <Check size={10} />}
                            </button>
                            <span className={`truncate font-sans ${task.completed ? 'line-through' : ''}`}>
                              {task.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-4xs bg-blue-50 border border-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold font-sans">
                              {task.source}
                            </span>
                            <button
                              onClick={() => deleteTask(task.id)}
                              className="text-slate-400 hover:text-rose-600 p-0.5 rounded cursor-pointer"
                            >
                              <Trash2 size={11} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {tasks.length === 0 && (
                      <div className="text-center py-8 text-slate-400 text-3xs font-sans">
                        لا يوجد مهام حالية. اضغط على زر السحب بالأعلى لإجراء عملية Scraping حية للموقع المختار.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center text-4xs text-slate-400 border-t border-slate-200 pt-2 font-sans">
                محاكاة برمجية حية لقاعدة البيانات المحلية.
              </div>
            </div>
          </div>

          {/* Database Viewer State (5 cols inside) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 mb-3">
                <Database size={13} className="text-emerald-600" />
                <span className="text-2xs font-bold text-slate-700 font-sans">مخزن البيانات المحلي</span>
              </div>
              <p className="text-3xs text-slate-500 font-sans leading-relaxed mb-3">
                هذا يمثل القيمة الفعلية المخزنة داخل <code className="text-blue-600 font-mono text-3xs bg-slate-50 px-1 py-0.5 rounded">chrome.storage.local</code> بشكل دائم:
              </p>

              {/* Live JSON dump */}
              <div className="bg-slate-950 border border-slate-800 rounded p-2.5 text-4xs font-mono text-emerald-400 h-[140px] overflow-auto text-left select-all">
                <pre>{JSON.stringify({ 
                  tasks: tasks.map(t => ({ title: t.title, completed: t.completed, source: t.source })) 
                }, null, 2)}</pre>
              </div>
            </div>

            <div className="text-4xs text-slate-400 mt-3 font-sans leading-relaxed">
              * بمجرد إغلاق إضافة الكروم وإعادة فتحها، سيتم تحميل هذا الملف الـ JSON تلقائياً لضمان حفظ البيانات.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

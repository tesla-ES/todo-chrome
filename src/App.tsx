import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import ArchitectureView from './components/ArchitectureView';
import PlanSteps from './components/PlanSteps';
import CodeGenerator from './components/CodeGenerator';
import ExtensionSimulator from './components/ExtensionSimulator';
import ScraplingGuide from './components/ScraplingGuide';
import ChromeEdgeGuide from './components/ChromeEdgeGuide';
import { 
  BookOpen, 
  CalendarRange, 
  Layers, 
  FileCode, 
  Network, 
  ChevronUp, 
  Chrome, 
  Database, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  Cpu,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col lg:flex-row-reverse" dir="rtl">
      
      {/* Sidebar - Mounted on the Right for RTL */}
      <aside className="w-full lg:w-68 bg-slate-900 text-white flex flex-col border-b lg:border-b-0 lg:border-l border-slate-800 shrink-0 relative z-20">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-md">
            <span className="font-bold text-white text-sm font-mono">TL</span>
          </div>
          <div>
            <span className="text-base font-bold tracking-tight font-sans block">TaskLinker Pro</span>
            <span className="text-[10px] text-slate-400 font-sans">مستشار ومنظم الإضافات</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-4 space-y-1">
          <a 
            href="#overview-section"
            onClick={() => setActiveSection('overview')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'overview' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Activity size={16} />
            <span>نظرة عامة • Overview</span>
          </a>

          <a 
            href="#simulator-section"
            onClick={() => setActiveSection('simulator')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'simulator' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Layers size={16} />
            <span>المحاكي التفاعلي</span>
          </a>

          <a 
            href="#architecture-section"
            onClick={() => setActiveSection('architecture')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'architecture' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Network size={16} />
            <span>بنية وهيكل النظام</span>
          </a>

          <a 
            href="#roadmap-section"
            onClick={() => setActiveSection('roadmap')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'roadmap' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <CalendarRange size={16} />
            <span>خارطة طريق المشروع</span>
          </a>

          <a 
            href="#code-section"
            onClick={() => setActiveSection('code')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'code' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileCode size={16} />
            <span>ملفات الأكواد الجاهزة</span>
          </a>

          <a 
            href="#deploy-section"
            onClick={() => setActiveSection('deploy')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'deploy' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Chrome size={16} />
            <span>تثبيت Chrome & Edge</span>
          </a>

          <a 
            href="#guide-section"
            onClick={() => setActiveSection('guide')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === 'guide' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BookOpen size={16} />
            <span>دليل Scrapling</span>
          </a>
        </nav>

        {/* Database Status Panel */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/40">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2">حالة قاعدة البيانات</div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300">chrome.storage.local</span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              نشط • Active
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-blue-500 h-1.5 rounded-full w-[15%]" />
          </div>
          <div className="text-[9px] text-slate-500 mt-1">تم استهلاك 1.5 كيلوبايت / 10 ميجابايت</div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-x-hidden">
        
        {/* Workspace Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 relative z-10">
          <div className="flex items-center gap-2">
            <Chrome className="text-blue-600" size={20} />
            <h1 className="text-base md:text-lg font-extrabold text-slate-800 font-sans">
              بيئة عمل مستشار الإضافة الاحترافية
            </h1>
          </div>
          <div className="flex gap-2">
            <a 
              href="#simulator-section"
              className="px-3.5 py-1.5 bg-blue-600 text-white text-xs font-bold rounded shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              تشغيل المحاكي التفاعلي
            </a>
            <a 
              href="#code-section"
              className="px-3.5 py-1.5 border border-slate-300 text-slate-600 text-xs font-bold rounded bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              عرض الأكواد
            </a>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 md:p-8 space-y-8 max-w-7xl w-full mx-auto" id="overview-section">
          
          {/* Main Title Section */}
          <Header />

          {/* Professional Polish Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 font-sans">المراقبة المستمرة</span>
                <span className="p-1.5 bg-blue-50 text-blue-600 rounded">
                  <Activity size={16} />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-800 mt-2 font-mono">14</div>
              <div className="text-3xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                <span>+2 تم إضافتها منذ الجلسة الأخيرة</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 font-sans">عمليات السحب والمراجعة</span>
                <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded">
                  <Cpu size={16} />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-800 mt-2 font-mono">842</div>
              <div className="text-3xs text-blue-600 font-bold mt-2 flex items-center gap-1">
                <span>آخر مزامنة عبر Scrapling: قبل دقيقتين</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 font-sans">أخطاء مزامنة البيانات</span>
                <span className="p-1.5 bg-rose-50 text-rose-600 rounded">
                  <AlertCircle size={16} />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-600 mt-2 font-mono">0</div>
              <div className="text-3xs text-slate-400 font-bold mt-2 flex items-center gap-1">
                <span>قاعدة البيانات المحلية في حالة ممتازة</span>
              </div>
            </div>
          </div>

          {/* Simulated Web Store Log View from the Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Scraper Engine Configurations Table */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="font-bold text-slate-700 text-sm font-sans">إعدادات محرك سحب البيانات الافتراضية</h2>
                <span className="text-2xs font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded border border-slate-200">
                  Lib: Scrapling v1.2.0
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 uppercase tracking-wider border-b border-slate-100 font-sans">
                      <th className="px-6 py-3 font-semibold">الصفحة المستهدفة</th>
                      <th className="px-6 py-3 font-semibold">عناصر البيانات</th>
                      <th className="px-6 py-3 font-semibold">قاعدة المراجعة والفلترة</th>
                      <th className="px-6 py-3 font-semibold">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-sans">
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 font-mono">github.com/scrapling</td>
                      <td className="px-6 py-4">Issues Titles</td>
                      <td className="px-6 py-4 font-mono">is_string()</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-4xs font-bold bg-emerald-100 text-emerald-800">
                          نشط • RUNNING
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 font-mono">trello.com/b/*</td>
                      <td className="px-6 py-4">Card Due Dates</td>
                      <td className="px-6 py-4 font-mono">parse_date()</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-4xs font-bold bg-emerald-100 text-emerald-800">
                          نشط • RUNNING
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 font-mono">generic-page.com/todo</td>
                      <td className="px-6 py-4">List Items</td>
                      <td className="px-6 py-4 font-mono">match_keywords()</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-4xs font-bold bg-amber-100 text-amber-800">
                          متوقف مؤقتاً
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Logs Panel */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-700 text-sm font-sans mb-4 pb-2 border-b border-slate-100">سجلات النظام المباشرة</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 text-xs">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800">تم سحب 42 سجل بنجاح</p>
                      <p className="text-slate-500 text-3xs mt-0.5">تم الحفظ في قاعدة البيانات المحلية (Commit ID: 88f2)</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">14:20:05</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800">تحذير من بنية الصفحة</p>
                      <p className="text-slate-500 text-3xs mt-0.5">تغير طفيف في أكواد موقع github.com - تم تفعيل الحماية</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">14:15:22</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-4 text-white mt-4 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="font-bold text-2xs">التحكم الفوري بمحرك السحب</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-500 rounded text-3xs font-bold transition-colors cursor-pointer">
                    إعادة تشغيل المحرك
                  </button>
                  <button className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-500 rounded text-3xs font-bold transition-colors cursor-pointer">
                    إيقاف مؤقت
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Section 2: Extension Interactive Simulator */}
          <ExtensionSimulator />

          {/* Section 1: Architecture View */}
          <ArchitectureView />

          {/* Section 3: Detailed Step Roadmap Checklist */}
          <PlanSteps />

          {/* Section 4: Boilerplate Code Generator */}
          <CodeGenerator />

          {/* Section 5: Chrome and Edge Deployment Guide */}
          <div id="deploy-section">
            <ChromeEdgeGuide />
          </div>

          {/* Section 6: Scrapling Features Guide */}
          <ScraplingGuide />

        </div>

        {/* FAQ Quick Footer Section */}
        <footer className="mt-12 py-8 bg-white border-t border-slate-200 text-center text-xs text-slate-500 font-sans">
          <p className="mb-2">جميع حقوق الأكواد والخطط مفتوحة المصدر - جاهزة تماماً للنسخ والتعديل للمشاريع الشخصية والتجارية.</p>
          <p className="font-mono text-3xs text-slate-400">TaskLinker Pro • Powered by Scrapling & Manifest V3</p>
        </footer>
      </main>

      {/* Floating back to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-900/30 cursor-pointer z-50 transition-all"
          title="العودة للأعلى"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
}

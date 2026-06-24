import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Chrome, Settings, ArrowRight, RefreshCw, Layers, ShieldCheck, CheckCircle, Info } from 'lucide-react';

export default function ChromeEdgeGuide() {
  const [selectedBrowser, setSelectedBrowser] = useState<'chrome' | 'edge'>('chrome');

  const chromeSteps = [
    {
      title: 'افتح صفحة الإضافات',
      desc: 'في شريط عنوان متصفح Google Chrome، اكتب الرابط التالي واضغط Enter:',
      badge: 'chrome://extensions',
      imgLabel: 'فتح صفحة الإضافات في كروم'
    },
    {
      title: 'تفعيل وضع مطور البرامج (Developer Mode)',
      desc: 'في الزاوية العلوية اليسرى (أو اليمنى حسب لغة المتصفح)، قم بتشغيل الزر الخاص بـ "وضع مطور البرامج" لتظهر لك خيارات التطوير الإضافية.',
      badge: 'Developer Mode: ON',
      imgLabel: 'تفعيل وضع المطور'
    },
    {
      title: 'تحميل الإضافة غير المعبأة (Load Unpacked)',
      desc: 'اضغط على زر "تحميل إضافة غير معبأة" (Load unpacked) ثم قم باختيار المجلد الذي يحتوي على ملف المانيفست (مجلد extension).',
      badge: 'Load Unpacked',
      imgLabel: 'تحديد مجلد الإضافة'
    },
    {
      title: 'تثبيت الإضافة وتجربتها',
      desc: 'ستظهر أيقونة الإضافة في شريط الأدوات العلوي بجانب شريط العنوان. يمكنك الآن الضغط عليها لبدء تشغيل منظم المهام والاتصال بـ Scrapling API.',
      badge: 'قيد التشغيل الآن',
      imgLabel: 'جاهز للاستخدام'
    }
  ];

  const edgeSteps = [
    {
      title: 'افتح صفحة ملحقات إيدج',
      desc: 'في شريط عنوان متصفح Microsoft Edge، اكتب الرابط التالي واضغط Enter:',
      badge: 'edge://extensions',
      imgLabel: 'فتح صفحة الملحقات في إيدج'
    },
    {
      title: 'تفعيل وضع مطور البرامج',
      desc: 'من القائمة الجانبية اليسرى، قم بتمرير الشاشة للأسفل وقم بتفعيل خيار "وضع المطور" (Developer mode) لتفعيل تثبيت الإضافات الخارجية.',
      badge: 'Developer Mode: ON',
      imgLabel: 'تفعيل وضع المطور في إيدج'
    },
    {
      title: 'تحميل ملحق غير معبأ',
      desc: 'اضغط على زر "تحميل ملحق غير معبأ" (Load unpacked) الذي يظهر في الأعلى، ثم اختر مجلد الإضافة الرئيسي (extension) من جهازك.',
      badge: 'Load Unpacked',
      imgLabel: 'اختيار المجلد لـ Edge'
    },
    {
      title: 'تثبيت الملحق وبدء الاستخدام',
      desc: 'مبروك! الإضافة الآن تعمل بشكل كامل على متصفح Microsoft Edge مع دعم كامل لقاعدة البيانات المحلية وربط FastAPI بنسبة 100%.',
      badge: 'جاهز للعمل بالكامل',
      imgLabel: 'نشط على Edge'
    }
  ];

  const activeSteps = selectedBrowser === 'chrome' ? chromeSteps : edgeSteps;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="guide-section">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
            <Chrome size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 font-sans">دليل تثبيت وتشغيل الإضافة على Chrome & Edge</h2>
            <p className="text-xs text-slate-500 mt-1 font-sans">خطوات مبسطة وسهلة لتثبيت كود الإضافة مباشرة على متصفحك الشخصي والاستفادة منه فوراً.</p>
          </div>
        </div>

        {/* Browser Selector Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setSelectedBrowser('chrome')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedBrowser === 'chrome'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Chrome size={14} className="text-blue-500" />
            <span>Google Chrome</span>
          </button>
          <button
            onClick={() => setSelectedBrowser('edge')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedBrowser === 'edge'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {/* Edge-like color styling */}
            <span className="w-3.5 h-3.5 bg-sky-500 rounded-full flex items-center justify-center text-[10px] text-white font-mono font-bold">E</span>
            <span>Microsoft Edge</span>
          </button>
        </div>
      </div>

      {/* Compatibility Banner */}
      <div className="bg-blue-50/50 border border-blue-200/60 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start gap-3">
        <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
        <div className="text-right">
          <h4 className="text-xs font-bold text-slate-800 font-sans">ملاحظة تقنية حول التوافقية (Compatibility Note)</h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans mt-1">
            نظراً لأن متصفحي <strong>Google Chrome</strong> و <strong>Microsoft Edge</strong> يعتمدان كلاهما على محرك <strong>Chromium</strong> الأساسي، فإن الإضافة تستخدم معيار <strong>Manifest V3</strong> الموحد. هذا يعني أنك ستقوم بنسخ واستخدام <strong>نفس ملفات الأكواد تماماً</strong> دون أي حاجة للتغيير أو التعديل بين المتصفحين!
          </p>
        </div>
      </div>

      {/* Steps Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        <AnimatePresence mode="wait">
          {activeSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-[9px] font-mono font-bold bg-white text-slate-500 border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xs md:text-sm font-bold text-slate-800 mb-2 font-sans">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{step.desc}</p>
              </div>

              {/* Box simulator info inside */}
              <div className="mt-4 pt-3 border-t border-slate-250/50">
                <div className="flex items-center gap-1.5 text-4xs text-slate-400 font-mono font-bold uppercase">
                  <Settings size={10} className="text-slate-400" />
                  <span>{step.imgLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Troubleshooting and API connection block */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900 text-white rounded-xl p-6 shadow-lg">
        <div>
          <h3 className="text-sm font-bold text-white mb-2 font-sans flex items-center gap-2">
            <RefreshCw size={16} className="text-blue-400 animate-spin" />
            <span>تحديث وتطوير الأكواد المباشر</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            أثناء قيامك بالتعديل على أكواد <code className="text-blue-300 bg-slate-950 px-1 py-0.5 rounded">popup.js</code> أو <code className="text-blue-300 bg-slate-950 px-1 py-0.5 rounded">background.js</code>، لست بحاجة لإعادة تثبيت الإضافة مجدداً. كل ما عليك فعله هو الضغط على زر <strong>إعادة التحميل (Reload 🔄)</strong> الصغير المتواجد بداخل بطاقة الإضافة بصفحة إعدادات المتصفح ليتم تفعيل الكود الجديد فوراً!
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white mb-2 font-sans flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>ربط خادم Scrapling بنجاح</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            احرص على تشغيل خادم الـ API المحلي الخاص بـ FastAPI (عبر تشغيل ملف <code className="text-emerald-300 bg-slate-950 px-1 py-0.5 rounded font-mono">server.py</code>) على منفذ <code className="text-emerald-300 bg-slate-950 px-1 py-0.5 rounded font-mono">8000</code> لكي تتمكن الإضافة من إرسال طلبات السحب والحصول على نتائج سريعة وتحليل دقيق للمهام.
          </p>
        </div>
      </div>
    </div>
  );
}

import { BookOpen, ShieldCheck, Zap, Code2, Globe } from 'lucide-react';

export default function ScraplingGuide() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="guide-section">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
          <BookOpen size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800 font-sans">دليل ومزايا مكتبة Scrapling لسحب البيانات</h2>
          <p className="text-xs text-slate-500 mt-1 font-sans">لماذا تُعد Scrapling الخيار الأمثل لمشروعك مقارنة بـ BeautifulSoup أو Playwright التقليدية؟</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Bypass & Stealth */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="p-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-lg w-fit mb-4">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 font-sans">تخطي الحجب التلقائي (Anti-Bot Bypass)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              تأتي Scrapling مزودة بقدرات مدمجة لمحاكاة المتصفحات البشرية الحقيقية وتوليد بصمات متصفح (Fingerprints) عشوائية، مما يتيح لك جلب البيانات من مواقع مثل GitHub و Trello دون القلق من الحجب أو طلبات الـ Captcha المزعجة.
            </p>
          </div>
          <div className="text-4xs text-slate-400 mt-4 font-mono font-bold">
            Bypass technology out of the box
          </div>
        </div>

        {/* Card 2 - Speed */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="p-2 bg-amber-50 border border-amber-100 text-amber-700 rounded-lg w-fit mb-4">
              <Zap size={18} />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 font-sans">سرعة خارقة للأداء (Extreme Performance)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              بفضل اعتمادها على محركات جلب معززة ومحسنة، فإن Scrapling تقوم بتحميل الصفحات ومعالجتها بسرعة فائقة مقارنة بالمكتبات القديمة، مما يضمن ألا ينتظر مستخدم إضافة الكروم طويلاً لرؤية مهامه الجديدة.
            </p>
          </div>
          <div className="text-4xs text-slate-400 mt-4 font-mono font-bold">
            High performance request pooling
          </div>
        </div>

        {/* Card 3 - Simple API */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg w-fit mb-4">
              <Code2 size={18} />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 font-sans">سهولة الكتابة والاختيار (Intuitive Selectors)</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              توفر Scrapling واجهة استعلام مبسطة وذكية تعتمد على CSS selectors المألوفة مثل <code className="text-blue-600 font-mono text-3xs bg-white px-1 py-0.5 rounded border border-slate-100">css()</code> و XPath، مما يمكنك من استخراج النصوص، الروابط، والسمات بسطر برمجى واحد فقط.
            </p>
          </div>
          <div className="text-4xs text-slate-400 mt-4 font-mono font-bold">
            jQuery-like DOM extraction
          </div>
        </div>
      </div>

      {/* Comparison block */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-sm font-bold text-slate-700 mb-4 font-sans flex items-center gap-2">
          <Globe size={16} className="text-blue-600" />
          <span>مقارنة تفصيلية لطرق الاستخراج البرمجي:</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs text-slate-600">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-sans">
                <th className="pb-3 pt-1 font-bold">الميزة / الأداة</th>
                <th className="pb-3 pt-1 font-bold">BeautifulSoup</th>
                <th className="pb-3 pt-1 font-bold">Playwright / Selenium</th>
                <th className="pb-3 pt-1 text-blue-600 font-extrabold">Scrapling (الخيار الموصى به)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans text-slate-600">
              <tr className="hover:bg-white/40 transition-colors">
                <td className="py-3 font-semibold text-slate-700">سرعة التنفيذ</td>
                <td className="py-3 text-emerald-600">سريعة جداً (نصوص فقط)</td>
                <td className="py-3 text-rose-600">بطيئة (تفتح متصفح كامل)</td>
                <td className="py-3 text-emerald-600 font-extrabold">سريعة خارقة (خفيفة ومدمجة)</td>
              </tr>
              <tr className="hover:bg-white/40 transition-colors">
                <td className="py-3 font-semibold text-slate-700">تخطي حماية البوتات</td>
                <td className="py-3 text-rose-600">ضعيفة جداً (تُكشف بسهولة)</td>
                <td className="py-3 text-amber-600">متوسطة (تطلب حزم إضافية)</td>
                <td className="py-3 text-emerald-600 font-extrabold">قوية ومدمجة تلقائياً</td>
              </tr>
              <tr className="hover:bg-white/40 transition-colors">
                <td className="py-3 font-semibold text-slate-700">التحكم من إضافة الكروم</td>
                <td className="py-3 text-amber-600">صعب (تتطلب معالجة معقدة)</td>
                <td className="py-3 text-rose-600">صعب جداً للاستهلاك الخفيف</td>
                <td className="py-3 text-emerald-600 font-extrabold">سهل جداً عبر API نظيف</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

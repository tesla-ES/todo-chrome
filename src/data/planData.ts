import { PlanStep, CodeFile, ArchitectureNode } from '../types';

export const stepsData: PlanStep[] = [
  {
    id: 'step1',
    title: 'تهيئة المشروع وإعداد ملف المانيفست (Manifest v3)',
    titleEn: 'Project Initialization & Manifest Setup',
    description: 'تجهيز هيكل إضافة الكروم وإنشاء الملفات الأساسية وتحديد الصلاحيات المطلوبة للعمل بكفاءة.',
    duration: 'يوم 1-2',
    difficulty: 'Easy',
    category: 'setup',
    details: [
      'إنشاء مجلد المشروع الرئيسي وبداخله المجلدات الفرعية (popup, background, content, icons).',
      'كتابة ملف manifest.json بالإصدار الثالث (Manifest V3) وتحديد اسم الإضافة ووصفها.',
      'تحديد صلاحيات الوصول المطلوبة مثل storage لحفظ المهام محلياً، و activeTab لقراءة محتوى الصفحة الحالية.',
      'تعريف ملفات الخلفية background.js كـ Service Worker وملف الواجهة المنبثقة popup.html.',
      'تثبيت أي مكتبات مساعدة لتسهيل التطوير محلياً.'
    ]
  },
  {
    id: 'step2',
    title: 'تصميم واجهة المستخدم التفاعلية (Popup UI)',
    titleEn: 'Interactive Popup UI Design',
    description: 'بناء واجهة منبثقة مميزة وسهلة الاستخدام تتيح للمستخدم استعراض المهام اليومية، وتفعيل سحب البيانات تلقائياً.',
    duration: 'يوم 2-3',
    difficulty: 'Medium',
    category: 'ui',
    details: [
      'تصميم واجهة popup.html باستخدام HTML5 و CSS حديث (أو Tailwind CSS للإضافات).',
      'إضافة قسم لعرض قائمة المهام اليومية مع إمكانية تحديد المهمة كمكتملة أو حذفها.',
      'إنشاء زر جذاب "سحب المهام من الصفحة الحالية" لبدء عملية الـ Scraping.',
      'ربط الواجهة بملف popup.js للتحكم في التفاعلات الديناميكية وتحديث القائمة فوراً.',
      'إضافة مؤشرات التحميل (Loading Spinners) أثناء جلب البيانات أو معالجتها.'
    ]
  },
  {
    id: 'step3',
    title: 'بناء واجهة برمجة تطبيقات السحب (Scrapling Backend API)',
    titleEn: 'Scrapling Backend API Development',
    description: 'بناء خادم Python صغير باستخدام FastAPI ومكتبة Scrapling لقراءة البيانات وتحليلها بأعلى سرعة وتخطي الحجب.',
    duration: 'يوم 3-5',
    difficulty: 'Hard',
    category: 'scraping',
    details: [
      'إعداد بيئة عمل Python وتثبيت مكتبة scrapling و fastapi و uvicorn.',
      'إنشاء خادم FastAPI يحتوي على نقطة نهاية (Endpoint) تستقبل رابط الصفحة المطلوب سحب البيانات منها.',
      'استخدام مكتبة Scrapling (Fetcher) لفتح الرابط واستخراج عناصر المهام (العنوان، الأولوية، تاريخ الاستحقاق).',
      'إجراء فلترة ومراجعة للبيانات المستخرجة وتنقيتها من النصوص العشوائية.',
      'إرجاع البيانات المهيكلة كـ JSON نظيف إلى إضافة الكروم.'
    ]
  },
  {
    id: 'step4',
    title: 'الربط وحفظ البيانات في قاعدة البيانات المحلية (Local Storage)',
    titleEn: 'Database Integration & Content Scripts',
    description: 'توصيل الإضافة بالخادم وحفظ المهام المستخرجة بأمان في ذاكرة المتصفح المحلية لتكون متاحة دائماً أوفلاين.',
    duration: 'يوم 5-6',
    difficulty: 'Medium',
    category: 'database',
    details: [
      'برمجة ملف background.js لاستقبال الطلبات من الواجهة المنبثقة وإرسالها إلى خادم Scrapling.',
      'استخدام chrome.storage.local لحفظ المهام بشكل مستمر ومنع فقدانها عند إغلاق المتصفح.',
      'بناء منطق في popup.js لقراءة المهام المخزنة محلياً عند فتح الإضافة وعرضها مباشرة.',
      'مزامنة البيانات بحيث ينعكس أي تغيير (إضافة، تعديل، حذف) فوراً في قاعدة البيانات المحلية.',
      'استخدام تقنيات التخزين المؤقت لتجنب تكرار سحب نفس المهمة.'
    ]
  },
  {
    id: 'step5',
    title: 'الاختبار، مراجعة البيانات، والرفع لمتجر الكروم',
    titleEn: 'Testing, Review & Web Store Publishing',
    description: 'إجراء مراجعة شاملة لتدفق البيانات، واختبار الأداء أوفلاين، وتجهيز الإضافة للنشر.',
    duration: 'يوم 6-7',
    difficulty: 'Easy',
    category: 'integration',
    details: [
      'اختبار الإضافة على صفحات ويب حقيقية للتأكد من دقة سحب البيانات بواسطة Scrapling.',
      'التأكد من معالجة الأخطاء (مثل تعطل الخادم أو عدم توفر الإنترنت) وعرض رسائل تنبيهية مناسبة.',
      'ضغط ملفات المشروع في ملف ZIP وتجهيز صور ترويجية للإضافة.',
      'رفع الإضافة إلى Chrome Developer Dashboard وتعبئة بيانات النشر للموافقة عليها.'
    ]
  }
];

export const architectureNodes: ArchitectureNode[] = [
  {
    id: 'popup',
    title: 'الواجهة المنبثقة الإضافة (Popup UI)',
    titleEn: 'Chrome Extension Popup',
    type: 'extension',
    description: 'الواجهة البرمجية المباشرة التي يتفاعل معها المستخدم لعرض المهام والتحكم بها.',
    descriptionEn: 'The direct visual interface that users interact with to view and manage tasks.',
    details: [
      'مبنية بـ HTML/CSS/JS.',
      'ترسل طلبات لبدء السحب إلى Content Script أو Background Script.',
      'تعرض قائمة المهام المخزنة في chrome.storage.local.'
    ]
  },
  {
    id: 'background',
    title: 'الخلفية الذكية (Background Service Worker)',
    titleEn: 'Background Service Worker',
    type: 'extension',
    description: 'العمود الفقري للإضافة الذي يعمل في الخلفية لمعالجة العمليات الطويلة والتواصل مع السيرفر الخارجي.',
    descriptionEn: 'The backbone of the extension running in the background to handle API requests and messaging.',
    details: [
      'يتعامل مع طلبات الـ HTTP الصادرة إلى FastAPI Backend.',
      'يقوم بجدولة التنبيهات وإدارة دورة حياة الإضافة.',
      'يتفادى مشاكل CORS التي قد تمنع الاتصال المباشر من الواجهة المنبثقة.'
    ]
  },
  {
    id: 'scrapling',
    title: 'خادم السحب (Scrapling Python API)',
    titleEn: 'Scrapling Python Backend',
    type: 'backend',
    description: 'خادم خارجي مبني بـ Python يستخدم مكتبة Scrapling القوية لسحب وتحليل البيانات وتجاوز أنظمة الحماية.',
    descriptionEn: 'An external server powered by Python and Scrapling library to fetch, parse, and filter web data.',
    details: [
      'يستقبل رابط الموقع المطلوب قراءته.',
      'يستخدم Fetcher من مكتبة Scrapling لجلب محتوى الصفحة بسرعة مذهلة.',
      'يقوم بفلترة البيانات وتحويلها إلى كائنات JSON نظيفة ومرتبة.'
    ]
  },
  {
    id: 'storage',
    title: 'التخزين المحلي (Chrome Local Storage)',
    titleEn: 'Chrome Local Storage DB',
    type: 'storage',
    description: 'قاعدة البيانات المحلية المدمجة في المتصفح لحفظ المهام والبيانات بشكل مستمر ودائم.',
    descriptionEn: 'The built-in secure browser storage that stores tasks locally, enabling instant offline access.',
    details: [
      'تحتفظ بالبيانات بصيغة Key-Value.',
      'تتميز بسرعة وصول فائقة ولا تتطلب اتصال بالإنترنت.',
      'سعتها التخزينية تصل إلى 10 ميغابايت (أو غير محدودة عند تحديد صلاحية unlimitedStorage).'
    ]
  }
];

export const boilerplateFiles: CodeFile[] = [
  {
    name: 'manifest.json',
    language: 'json',
    path: 'extension/manifest.json',
    description: 'الملف التعريفي الأساسي لإضافة الكروم (إصدار Manifest V3) والذي يحدد الملفات والصلاحيات.',
    descriptionEn: 'The core manifest file for Chrome Extension V3 defining metadata, permissions, and scripts.',
    code: `{
  "manifest_version": 3,
  "name": "منظم المهام اليومي والساحب الذكي",
  "version": "1.0.0",
  "description": "إضافة ذكية لتنظيم المهام اليومية وسحب المهام تلقائياً من صفحات الويب.",
  "permissions": [
    "storage",
    "activeTab",
    "alarms"
  ],
  "action": {
    "default_popup": "popup/popup.html",
    "default_icon": "icons/icon128.png"
  },
  "background": {
    "service_worker": "background/background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/content.js"]
    }
  ],
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}`
  },
  {
    name: 'popup.html',
    language: 'html',
    path: 'extension/popup/popup.html',
    description: 'واجهة المستخدم للإضافة التي تظهر كنافذة منبثقة صغيرة عند الضغط على أيقونة الإضافة.',
    descriptionEn: 'The interactive popup user interface structure styled with clean responsive blocks.',
    code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>منظم المهام</title>
  <style>
    body {
      width: 350px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 15px;
      background-color: #f8fafc;
      color: #1e293b;
    }
    h3 {
      margin-top: 0;
      color: #0f172a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 8px;
    }
    .btn {
      width: 100%;
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      transition: background-color 0.2s;
    }
    .btn:hover {
      background-color: #1d4ed8;
    }
    .task-list {
      list-style: none;
      padding: 0;
      margin: 15px 0;
      max-height: 250px;
      overflow-y: auto;
    }
    .task-item {
      background: white;
      padding: 10px;
      border-radius: 6px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      border-left: 4px solid #3b82f6;
    }
    .task-item.completed {
      border-left-color: #10b981;
      opacity: 0.6;
    }
    .task-title {
      font-size: 13px;
      font-weight: 500;
    }
    .task-actions button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
    .status-badge {
      font-size: 10px;
      background: #eff6ff;
      color: #1d4ed8;
      padding: 2px 6px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h3>
    <span>منظم المهام اليومي</span>
    <span style="font-size: 12px; color: #64748b;">إصدار 1.0</span>
  </h3>
  
  <button id="btn-scrape" class="btn">✨ سحب وتحليل المهام من الصفحة</button>
  
  <div id="loading" style="display: none; text-align: center; margin: 10px 0; color: #2563eb; font-size: 13px;">
    جاري الاتصال بـ Scrapling وجلب المهام...
  </div>

  <ul id="task-list" class="task-list">
    <!-- المهام ستظهر هنا برمجياً -->
  </ul>

  <div style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 10px;">
    يتم حفظ جميع البيانات محلياً في ذاكرة المتصفح بأمان.
  </div>

  <script src="popup.js"></script>
</body>
</html>`
  },
  {
    name: 'popup.js',
    language: 'javascript',
    path: 'extension/popup/popup.js',
    description: 'الملف التفاعلي للواجهة المنبثقة، يقوم بعرض المهام، وحذفها، وطلب السحب من الخلفية.',
    descriptionEn: 'The main script driving the Popup UI, managing storage sync and UI event listeners.',
    code: `document.addEventListener('DOMContentLoaded', () => {
  const btnScrape = document.getElementById('btn-scrape');
  const taskList = document.getElementById('task-list');
  const loading = document.getElementById('loading');

  // تحميل وعرض المهام الحالية من المخزن المحلي
  function loadTasks() {
    chrome.storage.local.get({ tasks: [] }, (result) => {
      renderTasks(result.tasks);
    });
  }

  // عرض المهام في القائمة
  function renderTasks(tasks) {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
      taskList.innerHTML = '<li style="text-align:center;color:#64748b;padding:20px;font-size:13px;">لا يوجد مهام حالية. اضغط على الزر بالأعلى لسحب مهام جديدة!</li>';
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = \`task-item \${task.completed ? 'completed' : ''}\`;
      
      li.innerHTML = \`
        <div>
          <div class="task-title">\${task.title}</div>
          <span class="status-badge">\${task.source || 'ويب'}</span>
        </div>
        <div class="task-actions">
          <button class="btn-complete" data-index="\${index}">✅</button>
          <button class="btn-delete" data-index="\${index}">❌</button>
        </div>
      \`;
      taskList.appendChild(li);
    });

    // إضافة مستمعات الأحداث للأزرار
    document.querySelectorAll('.btn-complete').forEach(btn => {
      btn.addEventListener('click', (e) => toggleComplete(e.target.dataset.index));
    });
    document.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => deleteTask(e.target.dataset.index));
    });
  }

  // تغيير حالة اكتمال المهمة
  function toggleComplete(index) {
    chrome.storage.local.get({ tasks: [] }, (result) => {
      const tasks = result.tasks;
      tasks[index].completed = !tasks[index].completed;
      chrome.storage.local.set({ tasks }, () => {
        renderTasks(tasks);
      });
    });
  }

  // حذف مهمة
  function deleteTask(index) {
    chrome.storage.local.get({ tasks: [] }, (result) => {
      const tasks = result.tasks;
      tasks.splice(index, 1);
      chrome.storage.local.set({ tasks }, () => {
        renderTasks(tasks);
      });
    });
  }

  // الضغط على زر السحب والتحليل
  btnScrape.addEventListener('click', async () => {
    loading.style.display = 'block';
    btnScrape.disabled = true;

    // الحصول على رابط الصفحة النشطة حالياً
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (!currentTab || !currentTab.url) {
        alert('يرجى فتح صفحة ويب حقيقية أولاً!');
        loading.style.display = 'none';
        btnScrape.disabled = false;
        return;
      }

      // إرسال الطلب لـ Background Script لتنفيذه وتجنب الـ CORS
      chrome.runtime.sendMessage({
        action: 'scrapeTasks',
        url: currentTab.url
      }, (response) => {
        loading.style.display = 'none';
        btnScrape.disabled = false;

        if (response && response.success) {
          loadTasks(); // إعادة تحميل المهام بعد إضافتها بنجاح
        } else {
          alert('فشل سحب البيانات: ' + (response ? response.error : 'خطأ غير معروف'));
        }
      });
    });
  });

  loadTasks();
});`
  },
  {
    name: 'background.js',
    language: 'javascript',
    path: 'extension/background/background.js',
    description: 'يستمع للرسائل القادمة من الواجهة، ويقوم بطلب خادم Scrapling API الخارجي بأمان.',
    descriptionEn: 'Background service worker handles API requests to the Python server to fetch scraped items.',
    code: `// خادم الـ API الخاص بـ Scrapling
const SCRAPLING_API_URL = 'http://localhost:8000/api/scrape';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrapeTasks') {
    // الاتصال بخادم Python Scrapling بأمان لمنع الـ CORS
    fetch(SCRAPLING_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: request.url })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('تعذر الاستجابة من خادم Scrapling');
      }
      return response.json();
    })
    .then(data => {
      // جلب المهام القديمة لحفظ الجديدة فوقها دون مسحها
      chrome.storage.local.get({ tasks: [] }, (result) => {
        const existingTasks = result.tasks;
        const newTasks = data.tasks.map(t => ({
          title: t.title,
          completed: false,
          source: t.source || new URL(request.url).hostname,
          createdAt: new Date().toISOString()
        }));

        // دمج المهام وتفادي التكرار بناء على العنوان
        const mergedTasks = [...existingTasks];
        newTasks.forEach(newTask => {
          if (!mergedTasks.some(t => t.title.trim() === newTask.title.trim())) {
            mergedTasks.unshift(newTask);
          }
        });

        // حفظ في المخزن المحلي للكروم
        chrome.storage.local.set({ tasks: mergedTasks }, () => {
          sendResponse({ success: true, count: newTasks.length });
        });
      });
    })
    .catch(error => {
      console.error('خطأ أثناء سحب البيانات:', error);
      sendResponse({ success: false, error: error.message });
    });

    return true; // ضروري للإبقاء على قناة الاتصال مفتوحة للرد غير المتزامن
  }
});`
  },
  {
    name: 'server.py',
    language: 'python',
    path: 'backend/server.py',
    description: 'خادم Python خفيف مبني بـ FastAPI ومكتبة Scrapling لسحب البيانات وتقديمها للإضافة كـ JSON.',
    descriptionEn: 'Python FastAPI server importing Scrapling Fetcher to navigate pages and scrape task properties.',
    code: `from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from scrapling import Fetcher
import uvicorn

app = FastAPI(
    title="Scrapling Task API Service",
    description="خدمة ذكية لسحب وتحليل المهام باستخدام مكتبة Scrapling"
)

# تفعيل الـ CORS لتلقي اتصالات آمنة من إضافة الكروم
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # في الإنتاج يفضل تحديد معرف الإضافة chrome-extension://...
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScrapeRequest(BaseModel):
    url: str

@app.post("/api/scrape")
async def scrape_tasks(payload: ScrapeRequest):
    try:
        url = payload.url
        print(f"[*] جاري تصفح وسحب البيانات من: {url}")
        
        # استخدام Fetcher من مكتبة Scrapling (أداة سريعة للغاية وتحاكي المتصفح الطبيعي)
        fetcher = Fetcher(url, auto_match=True)
        
        extracted_tasks = []
        
        # مثال لسحب البيانات من صفحات مهام شائعة (مثل GitHub Issues أو Trello أو قوائم ويب عامة)
        if "github.com" in url:
            # سحب عناوين الـ Issues من جيت هاب كأمثلة لمهام عمل
            # Scrapling تدعم اختيار العناصر بسهولة عبر CSS Selector
            issue_elements = fetcher.css(".js-navigation-container .js-issue-row")
            for item in issue_elements:
                title = item.css("a.markdown-title::text").first()
                if title:
                    extracted_tasks.append({
                        "title": f"GitHub: {title.strip()}",
                        "source": "GitHub Issues"
                    })
        else:
            # منطق ذكي عام: سحب أي عناصر تشبه قوائم مهام أو عناوين فرعية
            # نبحث عن عناصر القوائم أو العناوين التي تحتوي على كلمات مفتاحية للمهام
            list_items = fetcher.css("li, .task-item, .todo-item, h3")
            for item in list_items:
                text = item.css("::text").first()
                if text and len(text.strip()) > 8 and len(text.strip()) < 80:
                    cleaned_text = text.strip()
                    # فلترة الكلمات الشائعة لتحديد هل تبدو كمهمة
                    if any(keyword in cleaned_text.lower() for keyword in ["task", "todo", "إجراء", "مهمة", "عمل", "fix", "update", "بناء"]):
                        extracted_tasks.append({
                            "title": cleaned_text,
                            "source": "صفحة عامة"
                        })
        
        # إذا لم يتم العثور على شيء، نسحب العناوين h2 و h3 كمهام مقترحة للقراءة ومراجعتها
        if not extracted_tasks:
            headings = fetcher.css("h2, h3")
            for h in headings[:5]:
                text = h.css("::text").first()
                if text and len(text.strip()) > 5:
                    extracted_tasks.append({
                        "title": f"مراجعة وقراءة: {text.strip()}",
                        "source": "محتوى الصفحة"
                    })

        return {
            "success": True,
            "tasks": extracted_tasks,
            "count": len(extracted_tasks)
        }
        
    except Exception as e:
        print(f"[!] حدث خطأ أثناء السحب: {str(e)}")
        raise HTTPException(status_code=500, detail=f"فشل السحب بواسطة Scrapling: {str(e)}")

if __name__ == "__main__":
    # تشغيل الخادم محلياً على منفذ 8000
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
`
  }
];

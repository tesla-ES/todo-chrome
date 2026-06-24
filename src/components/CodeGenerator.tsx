import { useState } from 'react';
import { motion } from 'motion/react';
import { boilerplateFiles } from '../data/planData';
import { FileCode, Copy, Check, Info, FileJson, FileText } from 'lucide-react';

export default function CodeGenerator() {
  const [activeFile, setActiveFile] = useState<string>(boilerplateFiles[0].name);
  const [copied, setCopied] = useState<boolean>(false);

  const currentFile = boilerplateFiles.find(f => f.name === activeFile) || boilerplateFiles[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.json')) return <FileJson size={14} className="text-amber-600" />;
    if (fileName.endsWith('.py')) return <FileCode size={14} className="text-sky-600" />;
    return <FileText size={14} className="text-blue-600" />;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm" id="code-section">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
            <FileCode size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 font-sans">الأكواد الجاهزة للمشروع (Boilerplate Generator)</h2>
            <p className="text-xs text-slate-500 mt-1 font-sans">انسخ هذه الملفات وابدأ في بناء مشروعك فوراً. الملفات مهيأة للربط المباشر وسحب البيانات.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column - File Tabs */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none">
          {boilerplateFiles.map(file => {
            const isActive = file.name === activeFile;
            return (
              <button
                key={file.name}
                onClick={() => {
                  setActiveFile(file.name);
                  setCopied(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-right text-xs font-semibold cursor-pointer whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {getFileIcon(file.name)}
                <div className="text-right">
                  <div className="font-mono text-xs font-bold">{file.name}</div>
                  <span className={`text-[10px] block mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {file.path}
                  </span>
                </div>
              </button>
            );
          })}

          <div className="hidden lg:block mt-auto p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex gap-2 items-start text-xs text-slate-500 leading-relaxed font-sans">
              <Info size={14} className="text-blue-600 mt-0.5 shrink-0" />
              <span>
                تأكد من تثبيت مكتبة <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded font-mono text-3xs font-bold">scrapling</code> على جهازك باستخدام الأمر:
                <pre className="text-emerald-400 bg-slate-900 px-2 py-1.5 rounded-md mt-2 font-mono text-3xs text-left overflow-x-auto select-all shadow-inner border border-slate-850">
                  pip install scrapling fastapi uvicorn
                </pre>
              </span>
            </div>
          </div>
        </div>

        {/* Right column - Code Viewer */}
        <div className="lg:col-span-9 bg-slate-900 rounded-xl border border-slate-800 flex flex-col overflow-hidden min-h-[450px]">
          {/* Code Header bar */}
          <div className="bg-slate-850 px-5 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </span>
              <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                {currentFile.path}
              </span>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                copied 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700/80'
              }`}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الكود'}</span>
            </button>
          </div>

          {/* Description of current file */}
          <div className="bg-slate-850/50 px-5 py-3 border-b border-slate-800/60 flex items-start gap-2.5">
            <Info size={14} className="text-blue-400 mt-1 shrink-0" />
            <div className="text-right">
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{currentFile.description}</p>
              <p className="text-3xs text-slate-500 font-mono mt-0.5">{currentFile.descriptionEn}</p>
            </div>
          </div>

          {/* Code Area */}
          <div className="p-5 font-mono text-xs overflow-auto flex-1 text-left leading-relaxed text-slate-300 bg-slate-950/40 max-h-[400px]">
            <pre className="whitespace-pre">{currentFile.code}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

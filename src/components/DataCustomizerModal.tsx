import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Edit3 } from 'lucide-react';

interface DataCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  onSaveName: (name: string) => void;
}

export function DataCustomizerModal({
  isOpen,
  onClose,
  currentName,
  onSaveName,
}: DataCustomizerModalProps) {
  const [nameInput, setNameInput] = useState(currentName);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onSaveName(nameInput.trim());
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md my-8 rounded-3xl bg-[#0C0E14] border border-white/10 p-6 sm:p-8 text-right space-y-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-right">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-end">
                  <span>تخصيص البيانات المباشرة</span>
                  <Edit3 className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-xs text-slate-400">تعديل الاسم المعروض في كافة أقسام وتذييل الموقع</p>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-300">
                  الاسم المعروض:
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="يحيى موسى"
                  className="w-full px-4 py-2.5 text-sm text-white bg-[#08090C] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-right"
                  autoFocus
                />
                <p className="text-[11px] text-slate-500">
                  يمكنك تخصيص الاسم المعروض في كافة أقسام وتذييل الموقع.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>حفظ الاسم</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

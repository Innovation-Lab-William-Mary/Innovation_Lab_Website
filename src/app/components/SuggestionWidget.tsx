import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";

export function SuggestionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Mock submission
      console.log("Suggestion submitted:", message);
      setIsSubmitted(true);
      setTimeout(() => {
        setMessage("");
        setIsSubmitted(false);
        setIsOpen(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white rounded-sm shadow-2xl border border-slate-200 w-80 overflow-hidden"
          >
            <div className="bg-[#F0B323] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-[#115740]" />
                <h3 className="font-bold text-[#115740]">Share Your Ideas</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#115740]/80 hover:text-[#115740] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-sm flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-bold text-slate-900">Thanks for your feedback!</p>
                  <p className="text-sm text-slate-600 mt-1">We'll review your suggestion.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Not ready to join but have suggestions or questions? We'd love to hear from you!
                  </p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, ideas, or questions..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-[#115740]/20 focus:border-[#115740] resize-none text-sm"
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#115740] text-white font-bold py-3 rounded-sm hover:bg-[#0b3829] transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Suggestion</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#F0B323] text-[#115740] px-6 py-3 shadow-2xl hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="font-bold text-sm">Close</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5" />
            <span className="font-bold text-sm">Suggestions</span>
          </>
        )}
      </motion.button>
    </div>
  );
}

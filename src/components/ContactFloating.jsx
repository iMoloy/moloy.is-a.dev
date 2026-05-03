"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Send, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    // Placeholder key - User should replace this with their own from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => {
          setStatus("idle");
          setIsOpen(false);
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-400 text-black flex items-center justify-center shadow-[4px_4px_0px_#000] border-2 border-black hover:bg-white transition-colors group"
        aria-label="Contact Me"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Backdrop & Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-0">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Form Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-black border-4 border-yellow-400 p-6 md:p-10 shadow-[12px_12px_0px_rgba(250,204,21,0.2)] max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 w-10 h-10 bg-yellow-400 text-black border-2 border-black flex items-center justify-center hover:bg-white transition-colors z-30"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                  Initiate <span className="text-yellow-400">Contact</span>
                </h2>
                <div className="w-16 h-2 bg-yellow-400 mt-2"></div>
                <p className="text-[10px] text-gray-500 mt-4 uppercase font-bold tracking-widest">
                  Secure Channel • 256-bit Interaction
                </p>
              </div>

              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 md:py-12 text-center"
                >
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-lg md:text-xl font-black text-white uppercase">Message Transmitted</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-2">I will respond to your frequency shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Identifier (Name)</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-gray-900 border-2 border-gray-800 p-3 text-white focus:border-yellow-400 outline-none transition-colors rounded-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Return Address (Email)</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-gray-900 border-2 border-gray-800 p-3 text-white focus:border-yellow-400 outline-none transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Subject</label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full bg-gray-900 border-2 border-gray-800 p-3 text-white focus:border-yellow-400 outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Encoded Message</label>
                    <textarea
                      required
                      name="message"
                      rows="4"
                      placeholder="Transmission details..."
                      className="w-full bg-gray-900 border-2 border-gray-800 p-3 text-white focus:border-yellow-400 outline-none transition-colors rounded-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-4 bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === "loading" ? "Transmitting..." : (
                      <>
                        Execute Send <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-widest animate-pulse">
                      Transmission Failed. Please retry.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

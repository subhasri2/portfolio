import { useState, FormEvent, ChangeEvent } from 'react';
import { X, Send, Mail, User, MessageSquare, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-scale-in overflow-hidden">
        {/* Decorative Header Background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>

        {/* Header */}
        <div className="relative flex items-center justify-between p-6 pb-2 z-10">
          <div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Let's Connect
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Send me a message directly to my email
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
              <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e: FormEvent) => {
              e.preventDefault();
              setStatus('sending');
              try {
                const res = await fetch("https://formsubmit.co/ajax/subhasrimaddela01@gmail.com", {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify(formData)
                });

                if (res.ok) {
                  setStatus('success');
                  setFormData({ firstName: '', lastName: '', email: '', message: '' });
                } else {
                  setStatus('error');
                }
              } catch (error) {
                setStatus('error');
              }
            }}
            className="p-6 space-y-5 relative z-10"
          >
            {/* Honeypot for spam protection */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {/* Disable Captcha for smoother experience */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 disabled:opacity-50"
                    placeholder="John"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lastName" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 disabled:opacity-50"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={status === 'sending'}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

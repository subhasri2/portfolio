import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out! This is a demo form.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Get In Touch
                </h2>

                <p className="mb-16 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Let's discuss how I can help optimize your infrastructure and deployment processes
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="mb-1 text-slate-600 dark:text-slate-400">Email</p>
                                    <a href="mailto:contact@example.com" className="text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        contact@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <MapPin className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <p className="mb-1 text-slate-600 dark:text-slate-400">Location</p>
                                    <p className="text-slate-900 dark:text-slate-200">San Francisco, CA</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <Linkedin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="mb-1 text-slate-600 dark:text-slate-400">LinkedIn</p>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        linkedin.com/in/yourprofile
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <Github className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <p className="mb-1 text-slate-600 dark:text-slate-400">GitHub</p>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        github.com/yourusername
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 dark:bg-slate-800/50 rounded-xl border border-blue-100 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-300">
                                Available for consulting, contract work, and full-time opportunities.
                                Open to remote and on-site positions.
                            </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-slate-700 dark:text-slate-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-slate-700 dark:text-slate-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-slate-700 dark:text-slate-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
                    <p>© 2025 DevOps Portfolio. Built with React & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
}

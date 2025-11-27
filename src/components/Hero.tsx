import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cloud, Server, Mail, FileText } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Profile Image Container */}
                <div className="mb-12 relative inline-block">
                    <div className="relative z-10">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-blue-500/30 ring-4 ring-blue-500/20 dark:ring-blue-400/20">
                            <ImageWithFallback
                                src="/profile.jpg"
                                alt="Subha Sri Maddela"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Curved Text / Inverted Rainbow Tag */}
                        <div className="absolute -inset-20 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <defs>
                                    <path
                                        id="curve"
                                        d="M 12,50 A 38,38 0 0,0 88,50"
                                        fill="none"
                                    />
                                </defs>
                                <text className="text-[4.5px] font-bold tracking-[0.2em] uppercase fill-blue-600 dark:fill-blue-400">
                                    <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                        DevOps & Cloud Engineer
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <h1 className="mb-4 mt-2 text-5xl md:text-7xl font-bold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-xl">
                    Subha Sri Maddela
                </h1>

                <div className="mb-12 max-w-3xl mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-xl">
                    <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                        I’m a DevOps and Cloud Engineer with 3+ years of experience specializing in CI/CD automation, multi-cloud infrastructure, and Kubernetes-based deployments. I’ve worked across AWS, Azure, and GCP environments, designing scalable, secure, and automated systems.
                    </p>
                </div>



                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-12">
                    <a
                        href="https://github.com/subhasri2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                        aria-label="GitHub"
                        title="github.com/subhasri2"
                    >
                        <div className="transition-transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10 fill-slate-800 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/subha-sri-maddela/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                        aria-label="LinkedIn"
                        title="linkedin.com/in/subha-sri-maddela"
                    >
                        <div className="transition-transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10 fill-[#0077B5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">LinkedIn</span>
                    </a>
                    <a
                        href="/Subha_DevOps_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                        aria-label="Resume"
                        title="View Resume"
                    >
                        <div className="transition-transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Back sheet */}
                                <rect x="10" y="6" width="38" height="50" rx="2" transform="rotate(-6 29 31)" fill="#cbd5e1" stroke="#334155" strokeWidth="2" className="dark:fill-slate-600 dark:stroke-slate-300" />
                                {/* Front sheet */}
                                <rect x="18" y="6" width="38" height="52" rx="2" fill="#f1f5f9" stroke="#1e293b" strokeWidth="2" className="dark:fill-slate-200 dark:stroke-slate-800" />

                                {/* Avatar */}
                                <circle cx="37" cy="24" r="7" fill="#fdba74" stroke="#1e293b" strokeWidth="2" className="dark:stroke-slate-800" />
                                <path d="M25 42 C25 34, 49 34, 49 42" fill="#818cf8" stroke="#1e293b" strokeWidth="2" className="dark:stroke-slate-800" />

                                {/* Lines */}
                                <line x1="26" y1="48" x2="48" y2="48" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" className="dark:stroke-slate-800" />
                                <line x1="26" y1="53" x2="48" y2="53" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" className="dark:stroke-slate-800" />
                            </svg>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Resume</span>
                    </a>
                    <a
                        href="mailto:subhasrimaddela1@gmail.com"
                        className="group flex flex-col items-center gap-2"
                        aria-label="Email"
                        title="subhasrimaddela1@gmail.com"
                    >
                        <div className="transition-transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="30" fill="#0ea5e9" />
                                <path d="M16 24 L32 36 L48 24 V40 C48 42.2 46.2 44 44 44 H20 C17.8 44 16 42.2 16 40 V24 Z" fill="white" />
                                <path d="M16 24 L32 36 L48 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M16 24 H48" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Email</span>
                    </a>
                    <a
                        href="https://ieeexplore.ieee.org/document/9835767"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                        aria-label="Publications"
                        title="IEEE Publication"
                    >
                        <div className="transition-transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Circular background */}
                                <circle cx="32" cy="32" r="31" fill="white" stroke="#e5e7eb" strokeWidth="2" />

                                {/* Purple decorative blobs */}
                                <circle cx="52" cy="12" r="8" fill="#a855f7" opacity="0.6" />
                                <ellipse cx="8" cy="52" rx="6" ry="8" fill="#a855f7" opacity="0.6" />
                                <path d="M50 48 Q56 52 52 56 Q48 60 44 56 Q40 52 44 48 Q48 44 52 48Z" fill="#a855f7" opacity="0.6" />

                                {/* Yellow decorative dots */}
                                <circle cx="8" cy="16" r="3" fill="#fbbf24" />
                                <circle cx="56" cy="52" r="3.5" fill="#fbbf24" />
                                <circle cx="48" cy="8" r="2" fill="#fbbf24" />

                                {/* Small plus signs */}
                                <path d="M54 28h3M55.5 26.5v3" stroke="#333" strokeWidth="1" strokeLinecap="round" />
                                <path d="M12 8h2M13 7v2" stroke="#333" strokeWidth="0.8" strokeLinecap="round" />

                                {/* Back document (gray) */}
                                <rect x="18" y="14" width="22" height="30" rx="2" fill="#9ca3af" stroke="#4b5563" strokeWidth="1.5" />

                                {/* Middle document (darker gray) */}
                                <rect x="20" y="16" width="22" height="30" rx="2" fill="#6b7280" stroke="#374151" strokeWidth="1.5" />

                                {/* Front document (cream/yellow) */}
                                <rect x="22" y="18" width="22" height="30" rx="2" fill="#fef3c7" stroke="#333" strokeWidth="2" />
                                <line x1="26" y1="24" x2="34" y2="24" stroke="#333" strokeWidth="1.5" />
                                <line x1="26" y1="28" x2="40" y2="28" stroke="#333" strokeWidth="1.5" />
                                <line x1="26" y1="32" x2="40" y2="32" stroke="#333" strokeWidth="1.5" />
                                <line x1="26" y1="36" x2="38" y2="36" stroke="#333" strokeWidth="1.5" />

                                {/* Magnifying glass */}
                                <circle cx="38" cy="40" r="10" fill="#dbeafe" stroke="#1e40af" strokeWidth="2.5" />
                                <line x1="45" y1="47" x2="52" y2="54" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />

                                {/* Network nodes inside magnifying glass */}
                                <circle cx="38" cy="40" r="2" fill="#3b82f6" />
                                <circle cx="34" cy="43" r="1.5" fill="#3b82f6" />
                                <circle cx="42" cy="43" r="1.5" fill="#3b82f6" />
                                <circle cx="38" cy="36" r="1.5" fill="#3b82f6" />
                                <line x1="38" y1="40" x2="34" y2="43" stroke="#3b82f6" strokeWidth="1.5" />
                                <line x1="38" y1="40" x2="42" y2="43" stroke="#3b82f6" strokeWidth="1.5" />
                                <line x1="38" y1="40" x2="38" y2="36" stroke="#3b82f6" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Publications</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

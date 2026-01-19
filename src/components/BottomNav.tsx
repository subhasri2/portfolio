import { User, Briefcase, Code2, Rocket, Heart, Mail, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BottomNavProps {
    onOpenContact: () => void;
}

export function BottomNav({ onOpenContact }: BottomNavProps) {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: User, label: 'About', href: '#' },
        { id: 'experience', icon: Briefcase, label: 'Experience', href: '#experience' },
        { id: 'skills', icon: Code2, label: 'Skills', href: '#skills' },
        { id: 'projects', icon: Rocket, label: 'Projects', href: '#projects' },
        { id: 'education', icon: GraduationCap, label: 'Education', href: '#education' },
        { id: 'hobbies', icon: Heart, label: 'Hobbies', href: '#hobbies' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-4">
            <nav className="flex items-center gap-2 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-full shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`relative group p-3 rounded-full transition-all duration-300 ${isActive
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            aria-label={item.label}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                                {item.label}
                                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900 dark:border-t-white"></span>
                            </span>
                        </a>
                    );
                })}

                <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-1"></div>

                <button
                    onClick={onOpenContact}
                    className="relative group p-3 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    aria-label="Contact"
                >
                    <Mail className="w-5 h-5" />

                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                        Contact
                        <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900 dark:border-t-white"></span>
                    </span>
                </button>
            </nav>
        </div>
    );
}

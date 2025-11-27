'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, BookOpen } from 'lucide-react';
import { getAssetPath } from '@/lib/basePath';

export function Education() {
    const [activeId, setActiveId] = useState<number>(0);

    const educationData = [
        {
            id: 0,
            degree: "Master of Science in Information Technology & Management",
            university: "The University of Texas at Dallas",
            location: "Dallas, Texas",
            period: "Aug 2023 – May 2025",
            coursework: "Object-Oriented Programming in Python, Database Foundations for Business Analytics, Advanced Statistics for Data Science, Cloud Computing Fundamentals",
            gradient: "from-orange-500 to-pink-600",
            image: "/utd-campus.png",
            color: "#f97316",
            imgPos: "60% 50%" // Shift view to right to show "UTD"
        },
        {
            id: 1,
            degree: "Bachelor of Technology in Electronics and Communication Engineering",
            university: "Vardhaman College of Engineering",
            location: "Hyderabad, India",
            period: "2018 – 2022",
            coursework: "Data Structures, Algorithms, Computer Networks, Operating Systems, Database Management Systems",
            gradient: "from-teal-500 to-blue-600",
            image: "/vardhaman-campus.png",
            color: "#0d9488",
            imgPos: "center"
        }
    ];

    const toggleCard = () => {
        setActiveId(prev => (prev === 0 ? 1 : 0));
    };

    return (
        <section id="education" className="py-24 px-4 overflow-hidden min-h-[800px]">
            <div className="max-w-6xl mx-auto relative">
                <h2 className="mb-20 text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
                    Education
                </h2>

                {/* Stack Container with Extra Left Spacing */}
                <div className="relative w-full md:w-[85%] lg:w-[75%] h-[500px] md:h-[450px] mx-auto perspective-1000 pl-0 md:pl-20">
                    {educationData.map((edu) => {
                        const isActive = activeId === edu.id;

                        return (
                            <motion.div
                                key={edu.id}
                                onClick={toggleCard}
                                animate={{
                                    top: isActive ? 0 : 60, // Active is top, Inactive is shifted down
                                    left: isActive ? 0 : -115, // Inactive is shifted left by ~3cm (115px)
                                    scale: isActive ? 1 : 0.96, // Slight scale down for depth
                                    zIndex: isActive ? 10 : 0, // Active on top
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className={`absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer origin-center transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Gradient Background applied to Parent to cover image area too */}
                                <div className={`flex flex-col md:flex-row w-full h-full bg-gradient-to-br ${edu.gradient}`}>
                                    {/* Left Side: Text Content (Full width mobile, 55% desktop) */}
                                    <div className={`w-full md:w-[55%] p-6 md:p-8 flex flex-col relative order-2 md:order-1 h-[60%] md:h-full`}>

                                        {/* Period Badge - Shifted Up */}
                                        <div className="absolute top-4 right-4 md:top-6 md:left-8 md:right-auto">
                                            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wide border border-white/20 text-white inline-flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                <span>{edu.period}</span>
                                            </div>
                                        </div>

                                        {/* Main Content - Shifted Up */}
                                        <div className="mt-8 md:mt-14 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                                            <h3 className="font-extrabold text-white leading-tight text-lg md:text-3xl mb-2 drop-shadow-sm pr-16 md:pr-0">
                                                {edu.university}
                                            </h3>

                                            <p className="font-bold text-white/90 text-xs md:text-lg mb-3 line-clamp-2">
                                                {edu.degree}
                                            </p>

                                            <div className="flex items-center gap-2 text-white/80 text-[10px] md:text-sm font-medium mb-4 md:mb-6">
                                                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                                {edu.location}
                                            </div>

                                            {/* Coursework */}
                                            <div className="mt-auto pt-3 md:pt-4 border-t border-white/20">
                                                <div className="flex items-center gap-2 text-white/90 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                                                    <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                                    <span>Coursework</span>
                                                </div>
                                                <p className="text-white/80 text-[10px] md:text-sm leading-relaxed font-medium line-clamp-3 md:line-clamp-none">
                                                    {edu.coursework}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Image (Full width mobile, 45% desktop) */}
                                    <div className="w-full md:w-[45%] relative h-[40%] md:h-full flex items-center justify-center order-1 md:order-2">
                                        {/* No bg-black here, so gradient shows through */}
                                        <img
                                            src={getAssetPath(edu.image)}
                                            alt={edu.university}
                                            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-none md:rounded-r-2xl drop-shadow-2xl"
                                            style={{ objectPosition: edu.imgPos }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

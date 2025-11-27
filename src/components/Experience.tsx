'use client';

import { useState } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight, Cloud, Container, GitBranch, Terminal, Database, Shield, Lock, Activity, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Experience() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const experiences = [
        {
            title: 'AWS DevOps/Cloud Engineer',
            company: 'Trimble',
            location: 'Dallas, TX',
            period: 'May 2024 – Present',
            image: '/trimble-logo.jpg',
            responsibilities: [
                'Manage AWS, Azure, and on-prem infrastructure using Terraform, Ansible, Puppet, and Chef',
                'Build and automate CI/CD pipelines with Jenkins, GitLab, and Azure DevOps',
                'Deploy microservices across EKS, AKS, and GKE using Docker and custom Helm charts',
                'Implement Kubernetes autoscaling, DR automation with Velero, and monitoring with Prometheus, Grafana, ELK, and Dynatrace'
            ],
            skills: [
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
            ]
        },
        {
            title: 'AWS / Cloud Engineer',
            company: 'Wells Fargo',
            location: 'India',
            period: 'June 2022 – July 2023',
            image: '/wellsfargo-logo.jpg',
            responsibilities: [
                'Automated cloud infrastructure across AWS and Azure using Terraform and Ansible',
                'Supported Kubernetes, Docker, Helm-based deployments across OpenShift and AKS',
                'Built GitLab & CircleCI pipelines, strengthened IAM/RBAC security, enhanced monitoring with ELK & Prometheus',
                'Implemented DR procedures and automation via Python, Bash, and PowerShell'
            ],
            skills: [
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
            ]
        },
        {
            title: 'DevOps Engineer',
            company: 'AT&T',
            location: 'India',
            period: 'May 2021 – May 2022',
            image: '/att-logo.jpg',
            responsibilities: [
                'Optimized Jenkins & Azure DevOps pipelines and automated workflows using Python and Bash',
                'Supported AWS migrations while maintaining security best practices',
                'Ensured database reliability across PostgreSQL, MongoDB, MySQL, Oracle, Snowflake',
                'Managed Kubernetes/Docker environments, implemented image scanning & RBAC, and improved system insights using AI-based monitoring scripts'
            ],
            skills: [
                { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
            ]
        }
    ];

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section id="experience" className="relative py-8 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="mb-16 text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
                    Experience
                </h2>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Previous Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 z-50 p-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                        aria-label="Previous experience"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </button>

                    {/* Overlapping Carousel Cards */}
                    <div className="relative w-full h-[500px] flex items-center justify-center">
                        {experiences.map((experience, index) => {
                            // Calculate position relative to current index with wrapping
                            let position = index - currentIndex;

                            // Wrap positions to create continuous carousel
                            if (position > experiences.length / 2) {
                                position -= experiences.length;
                            } else if (position < -experiences.length / 2) {
                                position += experiences.length;
                            }

                            const absPosition = Math.abs(position);

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute cursor-pointer"
                                    initial={false}
                                    animate={{
                                        x: position * 280, // Closer spacing for overlap
                                        scale: position === 0 ? 1 : 0.8,
                                        zIndex: position === 0 ? 30 : 20 - absPosition,
                                        opacity: absPosition > 1 ? 0.3 : (position === 0 ? 1 : 0.7),
                                        rotateY: (position === 0 && isFlipped) ? 180 : 0
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        perspective: '1000px',
                                        width: 'min(380px, 85vw)',
                                        height: '500px'
                                    }}
                                    onClick={() => {
                                        if (position === 0) {
                                            // Center card - flip it
                                            handleFlip();
                                        } else {
                                            // Side card - bring it to center
                                            setIsFlipped(false);
                                            if (position > 0) {
                                                handleNext();
                                            } else {
                                                handlePrev();
                                            }
                                        }
                                    }}
                                >
                                    {/* Front of Card */}
                                    <div
                                        className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        <div className="w-full h-full p-8 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex flex-col items-center justify-center text-white">
                                            <div className="inline-flex items-center justify-center w-32 h-32 mb-6 bg-white p-4 rounded-2xl shadow-lg">
                                                <img
                                                    src={experience.image}
                                                    alt={experience.company}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <h3 className="mb-2 text-center text-3xl font-bold tracking-tight">
                                                {experience.company}
                                            </h3>

                                            <p className="mb-6 text-xl font-medium text-blue-100 text-center">
                                                {experience.title}
                                            </p>

                                            <div className="flex flex-col gap-3 items-center w-full">
                                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="font-medium text-sm">{experience.period}</span>
                                                </div>

                                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="font-medium text-sm">{experience.location}</span>
                                                </div>
                                            </div>

                                            {position === 0 && (
                                                <div className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                                                    Tap to Flip
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div
                                        className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)'
                                        }}
                                    >
                                        <div className="w-full h-full p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col">
                                            {/* Header with Role and Company */}
                                            <div className="mb-4 pb-4 border-b-2 border-blue-500">
                                                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-1">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
                                                    {experience.company}
                                                </p>
                                            </div>

                                            {/* Responsibilities */}
                                            <div className="flex-1 overflow-y-auto pr-2 mb-4">
                                                <ul className="space-y-2.5">
                                                    {experience.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5">
                                                            <span className="mt-1.5 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></span>
                                                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills Icons */}
                                            <div className="pt-3 border-t border-slate-300 dark:border-slate-700">
                                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                                    {experience.skills.map((skill, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="relative group p-2.5 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-slate-700"
                                                            title={skill.name}
                                                        >
                                                            <img
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                className="w-6 h-6 object-contain"
                                                            />
                                                            {/* Tooltip */}
                                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                                                {skill.name}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 z-50 p-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                        aria-label="Next experience"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </button>
                </div>
            </div>
        </section>
    );
}


import { ImageWithFallback } from './figma/ImageWithFallback';
import { Server, Cloud, Code, GitBranch, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Technology and infrastructure"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl shadow-blue-500/10"
            />
          </div>

          <div className="space-y-6">
            <p className="text-slate-300">
              I’m a DevOps and Cloud Engineer with 3+ years of experience specializing in CI/CD automation, multi-cloud infrastructure, and Kubernetes-based deployments. I’ve worked across AWS, Azure, and GCP environments, designing scalable, secure, and automated systems using tools like Terraform, Jenkins, GitLab, Docker, and Helm.
            </p>

            <p className="text-slate-300">
              I have strong expertise in monitoring, DR automation, and container orchestration, ensuring high availability and optimized performance for critical applications. I’m currently enhancing cloud reliability and DevOps workflows at Trimble.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <Server className="w-8 h-8 mb-3 text-blue-400" />
                <h3 className="mb-1">Infrastructure</h3>
                <p className="text-slate-400">IaC & Automation</p>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <Cloud className="w-8 h-8 mb-3 text-purple-400" />
                <h3 className="mb-1">Cloud Native</h3>
                <p className="text-slate-400">AWS, Azure, GCP</p>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <Code className="w-8 h-8 mb-3 text-pink-400" />
                <h3 className="mb-1">Containers</h3>
                <p className="text-slate-400">Docker & K8s</p>
              </div>

              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <GitBranch className="w-8 h-8 mb-3 text-green-400" />
                <h3 className="mb-1">CI/CD</h3>
                <p className="text-slate-400">Jenkins, GitLab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-slate-200 mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-medium text-white">Master of Science in Information Technology & Management</h4>
                  <p className="text-blue-400">The University of Texas at Dallas</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">2023 - 2025</span>
              </div>
              <p className="text-slate-400 mb-2">Dallas, Texas</p>
              <p className="text-slate-400 text-sm">
                Coursework: OOP in Python, Database Foundations, Advanced Statistics for Data Science, Cloud Computing Fundamentals
              </p>
            </div>

            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-medium text-white">Bachelor of Technology in Electronics and Communication Engineering</h4>
                  <p className="text-purple-400">Vardhaman College of Engineering</p>
                </div>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">2018 - 2022</span>
              </div>
              <p className="text-slate-400">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

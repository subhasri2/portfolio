import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, GitBranch } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Designed multi-cloud AWS & Azure IaC using Terraform modules. Integrated with CI/CD for continuous provisioning.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
      tags: ['Terraform', 'AWS', 'Azure', 'Ansible', 'GitLab CI/CD', 'Python'],
      link: null
    },
    {
      title: 'Kubernetes Microservices Deployment',
      description: 'Containerized microservices and deployed to EKS/AKS. Implemented HPA, ingress, network policies, and multi-cluster management.',
      image: '/images/kubernetes-project.jpg',
      tags: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'GitHub/GitLab'],
      link: null
    },
    {
      title: 'Smart ATM Security System',
      description: 'Developed ATM security system using Python, Raspberry Pi, RFID, fingerprint authentication. Implemented MFA, OTP, webcam capture, intrusion detection.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
      tags: ['Python', 'Raspberry Pi', 'RFID', 'Biometrics'],
      link: 'https://ieeexplore.ieee.org/document/9835767',
      linkText: 'View Publication'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{project.linkText || 'View Details'}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FallingIcons() {
  // Real technology icons from DevIcons CDN
  const icons = [
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Terraform', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Jenkins', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'GitLab', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Nginx', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Ubuntu', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
    { name: 'Ansible', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
    { name: 'Prometheus', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Grafana', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  // Generate random falling icons with better distribution
  const fallingItems = Array.from({ length: 35 }, (_, i) => {
    const icon = icons[i % icons.length];
    return {
      ...icon,
      id: i,
      // Start from further right to account for leftward movement
      left: Math.random() * 150 - 20,
      animationDuration: 18 + Math.random() * 12,
      animationDelay: -(Math.random() * 30), // Negative delay makes them start "mid-fall" immediately
      size: 40, // Fixed size for all icons
      opacity: 0.15 + Math.random() * 0.25
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {fallingItems.map((item) => (
        <div
          key={item.id}
          className="absolute falling-icon-slanted"
          style={{
            left: `${item.left}%`,
            top: '-20vh', // Start off-screen to prevent "stuck at top" issue during delay
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDuration: `${item.animationDuration}s`,
            animationDelay: `${item.animationDelay}s`
          }}
        >
          <img
            src={item.url}
            alt={item.name}
            className="w-full h-full object-contain"
            style={{ opacity: item.opacity }} // Apply opacity to image so it persists through container animation
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

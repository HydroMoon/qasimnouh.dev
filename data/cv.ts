export const profile = {
  name: 'Gasim Nouh',
  role: 'Backend Developer & Laravel Technical Lead',
  location: 'Doha, Qatar',
  email: 'vs.dev50@gmail.com',
  linkedin: 'https://www.linkedin.com/in/qasim-nouh',
  summary:
    'Software developer who builds robust, scalable systems and has the infrastructure background to run them. I work across development and operations, bringing DevOps practice into delivery pipelines and keeping full-stack products fast, reliable and maintainable.',
}

export const stats = [
  { value: 70, suffix: '%', label: 'Shorter Docker build times' },
  { value: 50, suffix: '%', label: 'Faster page loads with Redis caching' },
  { value: 60, suffix: '%', label: 'Faster payment sync with webhooks' },
  { value: 10, suffix: '', label: 'Government & enterprise platforms delivered' },
]

export const experience = [
  {
    role: 'Backend Developer, Laravel Technical Lead',
    company: 'Applab Qatar',
    period: 'Nov 2021 – Present',
    location: 'Doha, Qatar',
    current: true,
    summary:
      'I lead backend delivery for large-scale platforms built for government entities and enterprises across Qatar.',
    highlights: [
      { metric: '30%', text: 'faster website response times from tuned web server configuration and backend optimization.' },
      { metric: '70%', text: 'less build time from Docker optimization and best practices, which sped up delivery for the whole team.' },
      { metric: '45%', text: 'lower architectural complexity from applying SOLID principles, making the codebase easier to maintain.' },
      { metric: '50%', text: 'faster page loads from integrating Redis caching.' },
      { metric: '50%', text: 'more efficient resource-heavy workloads from queue-based job processing.' },
      { metric: '40%', text: 'less DOM manipulation overhead from moving front-end work to Vue.js.' },
      { metric: '60%', text: 'faster payment synchronization from real-time webhooks.' },
    ],
    tags: ['Laravel', 'Vue.js', 'Redis', 'Docker', 'Queues', 'Webhooks', 'REST APIs'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2020 – 2021',
    location: 'Khartoum, Sudan',
    current: false,
    summary:
      'Designed and built software for a range of clients, from requirements through to final delivery.',
    highlights: [
      { metric: '', text: 'Built efficient, maintainable software matched to each client’s business goals.' },
      { metric: '', text: 'Owned project milestones end to end, from the first scoping session to final delivery.' },
      { metric: '', text: 'Built content management and learning management systems for educational institutions.' },
    ],
    tags: ['CMS', 'LMS', 'Laravel', 'JavaScript'],
  },
]

export const homelab = [
  {
    title: 'Proxmox cluster',
    detail: '3 physical nodes running virtualized services for testing and development.',
    icon: 'server',
  },
  {
    title: 'Kubernetes',
    detail: '3 physical nodes running containerized workloads.',
    icon: 'cube',
  },
  {
    title: 'pfSense firewall',
    detail: 'Separate VLANs for management, servers and guests.',
    icon: 'shield',
  },
  {
    title: 'WireGuard VPN',
    detail: 'Secure remote access to the whole network.',
    icon: 'key',
  },
]

export const skillGroups = [
  { title: 'Languages', items: ['PHP', 'C#', 'JavaScript'] },
  { title: 'Frameworks & Libraries', items: ['Laravel', 'ASP.NET Core', 'Vue.js', 'jQuery'] },
  { title: 'Containers & Orchestration', items: ['Docker', 'Kubernetes'] },
  { title: 'Infrastructure as Code', items: ['Terraform', 'OpenTofu', 'Ansible'] },
  { title: 'Cloud', items: ['Azure App Service', 'Azure DevOps', 'Azure Storage', 'Azure VMs', 'Azure APIM'] },
  { title: 'CI/CD & Tooling', items: ['Jenkins', 'Git', 'Bash', 'Postman', 'VS Code', 'IntelliJ IDEA'] },
  { title: 'Systems & Virtualization', items: ['Linux (Ubuntu)', 'Proxmox', 'VMware ESXi'] },
  { title: 'Networking & Security', items: ['WireGuard', 'pfSense', 'Firewall management'] },
  { title: 'Data', items: ['MySQL', 'Redis', 'NoSQL'] },
  { title: 'Observability', items: ['Grafana', 'Prometheus'] },
  { title: 'Design Patterns', items: ['Dependency Injection', 'Service', 'Repository', 'Microservices'] },
]

export const specialties = [
  { title: 'API & Backend Development', text: 'Designing, building and integrating RESTful APIs and scalable backends with modern frameworks.', icon: 'code' },
  { title: 'Automation, Testing & CI/CD', text: 'Automating tests and deployment pipelines so releases ship quickly and reliably.', icon: 'bolt' },
  { title: 'Payment Gateway Integration', text: 'Integrating secure payment methods and gateways into web and e-commerce applications.', icon: 'card' },
  { title: 'Database Design', text: 'Designing SQL and NoSQL databases for efficient storage, performance and reliability.', icon: 'database' },
  { title: 'Linux Server Administration', text: 'Configuring, maintaining, troubleshooting and hardening Linux servers.', icon: 'terminal' },
  { title: 'Error Detection & Maintenance', text: 'Finding, diagnosing and fixing issues to keep applications fast and stable.', icon: 'search' },
  { title: 'Web & Frontend', text: 'Building dynamic, responsive interfaces with modern front-end frameworks.', icon: 'window' },
  { title: 'Big Data Handling', text: 'Storing, processing and analyzing large datasets to produce actionable insights.', icon: 'chart' },
]

export const education = {
  degree: 'BSc (Hons) in Software Engineering',
  school: 'Jordanian Sudanese College for Science & Technology',
  location: 'Khartoum, Sudan',
  year: '2020',
}

export const marquee = [
  'Laravel', 'PHP', 'Vue.js', 'Docker', 'Kubernetes', 'Redis', 'MySQL', 'Terraform', 'OpenTofu',
  'Ansible', 'Azure', 'Jenkins', 'Grafana', 'Prometheus', 'Proxmox', 'pfSense', 'WireGuard', 'C#', 'ASP.NET Core', 'Linux',
]

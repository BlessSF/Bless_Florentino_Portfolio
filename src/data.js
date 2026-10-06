// Edit this file to change any text on the site.
export const profile = {
  name: 'Bless S. Florentino',
  role: 'Information Systems Graduate · Full-Stack Developer',
  intro: '', // leave empty to hide the paragraph under the headline
  location: 'Iloilo, Philippines',
  email: 'florentinobless@gmail.com',
  phone: '+63 968 239 1226',
  linkedin: 'https://linkedin.com/in/bless-florentino-953762340',
  github: 'https://github.com/BlessSF',
  resume: '/Bless_Florentino_Resume.pdf',
};

export const experience = [
  {
    role: 'IT Specialist',
    org: 'Multipliers Corp. & Meritoni Corp.',
    place: 'Red Spaces Dunggon B, Iloilo City',
    period: 'Jan 2026 – Present',
    points: [
      'Provide IT support, troubleshooting and technical assistance for internal operations.',
      'Developed and maintain a Payroll and Employee Management System using PHP, JavaScript, MySQL and web technologies.',
      'Automated payroll calculations, employee data management and report generation.',
      'Support HR processes through system development, maintenance and process automation.',
    ],
  },
];

export const education = {
  school: 'West Visayas State University',
  place: 'Iloilo City, Philippines',
  degree: 'BS Information Systems',
  major: 'Major in Business Application Development',
  period: 'August 2025',
};

export const projects = [
  {
    title: 'Receivables',
    url: 'https://receivables-supabase.vercel.app/',
    text: 'Accounts receivable system for tracking what each company owes: ledgers, statements of account, aging reports and branch-level access.',
    stack: ['React', 'Node.js', 'Supabase', 'Vercel'],
    access: 'Live · login required',
  },
  {
    title: 'MedRep',
    url: 'https://medrep-two.vercel.app/login',
    text: 'Daily transaction and cash-out management system tracking deposits, cash-outs and inter-employee transfers, with searchable records and monthly summary reports.',
    stack: ['Transactions', 'Cash-outs', 'Reporting'],
    access: 'Live · login required',
  },
  {
    title: 'Accounting System',
    url: 'https://accountingsystemtest.freehosting.dev/index.php',
    text: 'System supporting core accounting and record-keeping functions.',
    stack: ['PHP', 'MySQL', 'Accounting'],
    access: 'Live',
  },
  {
    title: 'Service Charge System',
    url: 'https://service.infinityfree.io/login.php',
    text: 'System to manage and track the distribution of service charges.',
    stack: ['PHP', 'MySQL'],
    access: 'Live · login required',
  },
  {
    title: 'Payroll & Employee Management',
    text: 'Streamlines HR processes: automates payroll calculations, manages employee data and generates reports to improve departmental workflow.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    access: 'Internal system',
  },
  {
    title: 'CSO Accreditation & Performance Evaluation',
    text: 'Capstone for the Department of Agriculture Region 6. A web system centralizing document management, project monitoring and performance ranking for Civil Society Organizations.',
    stack: ['Web app', 'Document management', 'Ranking'],
    access: 'Capstone project',
  },
];

export const skills = [
  { group: 'Languages', note: 'Front end, back end and queries', items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'] },
  { group: 'Databases', note: 'Relational and hosted', items: ['MySQL', 'PostgreSQL', 'Supabase'] },
  { group: 'Tools', note: 'Build, version, deploy', items: ['Visual Studio Code', 'Git', 'GitHub', 'Vercel', 'Hostinger', 'Microsoft Office'] },
  { group: 'Design', note: 'How the systems feel to use', items: ['User-friendly interfaces', 'Responsive layouts', 'Usability-focused UX'] },
];
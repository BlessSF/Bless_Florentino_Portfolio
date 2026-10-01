// Edit this file to change your name, contact details and projects.
export const profile = {
  name: 'Your Name',
  role: 'Web Developer',
  headline: 'Business systems for ledgers, accounting and receivables.',
  intro:
    'I design and build web applications that keep branches, balances and records accurate. Each project below is live and in use.',
  location: 'Iloilo, Philippines',
  email: '',   // e.g. 'you@email.com'
  phone: '',   // e.g. '+63 900 000 0000'
  github: '',  // e.g. 'https://github.com/yourname'
};

export const capabilities = [
  { title: 'Ledgers & transactions', text: 'Clear, auditable records of every transaction, organised per branch.' },
  { title: 'Accounting & receivables', text: 'Statements of account, aging and running balances that stay accurate.' },
  { title: 'Access control', text: 'Branch and role-based sign-in so each user sees only what they should.' },
];

export const projects = [
  {
    title: 'Receivables',
    url: 'https://receivables-supabase.vercel.app/',
    text: 'Accounts receivable system for tracking what each company owes. Ledgers, statements of account, aging reports and branch-level access.',
    stack: ['React', 'Node.js', 'Supabase', 'Vercel'],
    access: 'Login required',
  },
  {
    title: 'MedRep',
    url: 'https://medrep-two.vercel.app/login',
    text: 'Transaction ledger system for a multi-branch business. Staff sign in by branch and record transactions in one place.',
    stack: ['Ledger', 'Branch sign-in', 'Vercel'],
    access: 'Login required',
  },
  {
    title: 'Accounting System',
    url: 'https://accountingsystemtest.freehosting.dev/index.php',
    text: 'Web-based accounting system for recording and reporting a business’s finances.',
    stack: ['PHP', 'Accounting'],
    access: 'Live demo',
  },
  {
    title: 'Service Charge',
    url: 'https://service.infinityfree.io/login.php',
    text: 'Service charge management system with secure login for tracking and distributing service charges.',
    stack: ['PHP', 'Secure login'],
    access: 'Login required',
  },
];

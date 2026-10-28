import {
  SiPhp, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiMysql, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiVercel, SiHostinger,
  SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiTailwindcss,
} from 'react-icons/si';
import { TbSql, TbBrandVscode, TbBrandOffice } from 'react-icons/tb';
import {
  LuLayoutTemplate, LuMonitorSmartphone, LuMousePointerClick, LuCode,
  LuHeadset, LuMonitorCog, LuPrinter, LuWrench, LuHardDrive, LuNetwork,
  LuArrowLeftRight, LuBanknote, LuChartColumn, LuCalculator, LuGlobe, LuFolderOpen, LuTrophy,
} from 'react-icons/lu';

// Key = the exact skill name used in data.js. Add a line here when you add a skill.
// Brand colours, tuned to stay readable on the light paper background
// (React, Tailwind, JavaScript are slightly deepened; GitHub, Vercel, Next.js use ink).
const INK = '#17191c';
const GREEN = '#1c5a46';

export const skillIcons = {
  PHP: { Icon: SiPhp, color: '#777bb4' },
  JavaScript: { Icon: SiJavascript, color: '#d9b700' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: '#1572b6' },
  SQL: { Icon: TbSql, color: '#4b5f73' },

  React: { Icon: SiReact, color: '#0b86a8' },
  'Next.js': { Icon: SiNextdotjs, color: INK },
  'Node.js': { Icon: SiNodedotjs, color: '#3c873a' },
  Laravel: { Icon: SiLaravel, color: '#ff2d20' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#0891b2' },

  MySQL: { Icon: SiMysql, color: '#4479a1' },
  PostgreSQL: { Icon: SiPostgresql, color: '#336791' },
  Supabase: { Icon: SiSupabase, color: '#1fae72' },

  'Visual Studio Code': { Icon: TbBrandVscode, color: '#007acc' },
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: INK },
  Vercel: { Icon: SiVercel, color: INK },
  Hostinger: { Icon: SiHostinger, color: '#673de6' },
  'Microsoft Office': { Icon: TbBrandOffice, color: '#d83b01' },

  'IT support & troubleshooting': { Icon: LuHeadset, color: GREEN },
  'PC repair & maintenance': { Icon: LuMonitorCog, color: GREEN },
  'Printer repair & maintenance': { Icon: LuPrinter, color: GREEN },
  'Hardware & peripherals': { Icon: LuHardDrive, color: GREEN },
  'Network & connectivity': { Icon: LuNetwork, color: GREEN },
  'Preventive maintenance': { Icon: LuWrench, color: GREEN },

  // project tags that describe a feature or domain rather than a technology
  Transactions: { Icon: LuArrowLeftRight, color: GREEN },
  'Cash-outs': { Icon: LuBanknote, color: GREEN },
  Reporting: { Icon: LuChartColumn, color: GREEN },
  Accounting: { Icon: LuCalculator, color: GREEN },
  'Web app': { Icon: LuGlobe, color: GREEN },
  'Document management': { Icon: LuFolderOpen, color: GREEN },
  Ranking: { Icon: LuTrophy, color: GREEN },

  'User-friendly interfaces': { Icon: LuLayoutTemplate, color: GREEN },
  'Responsive layouts': { Icon: LuMonitorSmartphone, color: GREEN },
  'Usability-focused UX': { Icon: LuMousePointerClick, color: GREEN },
};

export const fallbackIcon = { Icon: LuCode, color: GREEN };
import {
  SiPhp, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiMysql, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiVercel, SiHostinger,
} from 'react-icons/si';
import { TbSql, TbBrandVscode, TbBrandOffice } from 'react-icons/tb';
import { LuLayoutTemplate, LuMonitorSmartphone, LuMousePointerClick, LuCode } from 'react-icons/lu';

// Key = the exact skill name used in data.js. Add a line here when you add a skill.
// Colours are the official brand colours, lightened a little where the original
// is too dark to read on the navy background (GitHub, Vercel, MySQL, CSS, Hostinger).
const BLUE = '#6db4ff';

export const skillIcons = {
  PHP: { Icon: SiPhp, color: '#aab0f0' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { Icon: SiTypescript, color: '#4a95e8' },
  HTML: { Icon: SiHtml5, color: '#ee5d33' },
  CSS: { Icon: SiCss, color: '#a678e8' },
  SQL: { Icon: TbSql, color: '#a9d0f7' },

  MySQL: { Icon: SiMysql, color: '#7cc3f0' },
  PostgreSQL: { Icon: SiPostgresql, color: '#86a6ff' },
  Supabase: { Icon: SiSupabase, color: '#3ecf8e' },

  'Visual Studio Code': { Icon: TbBrandVscode, color: '#2fa8f5' },
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: '#eef3fb' },
  Vercel: { Icon: SiVercel, color: '#eef3fb' },
  Hostinger: { Icon: SiHostinger, color: '#9576ff' },
  'Microsoft Office': { Icon: TbBrandOffice, color: '#f0642d' },

  'User-friendly interfaces': { Icon: LuLayoutTemplate, color: BLUE },
  'Responsive layouts': { Icon: LuMonitorSmartphone, color: BLUE },
  'Usability-focused UX': { Icon: LuMousePointerClick, color: BLUE },
};

export const fallbackIcon = { Icon: LuCode, color: BLUE };
import { profile, experience, education, projects, skills } from './data.js';
import { skillIcons, fallbackIcon } from './skillIcons.jsx';
import { LuMail, LuPhone, LuMapPin, LuDownload, LuBriefcase, LuGraduationCap, LuLayers, LuArrowDown } from 'react-icons/lu';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Styling is Tailwind; colours and fonts are tokens defined in index.css.
const wrap = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';
const serif = 'font-serif';
const eyebrow = 'text-[12.5px] font-semibold uppercase tracking-[0.12em] text-accent';
const pad = (n) => String(n).padStart(2, '0');

const btnPrimary = `inline-flex items-center rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-[#14473a] ${focus}`;
const btnGhost = `inline-flex items-center rounded-full border border-ink/25 px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper ${focus}`;

function SectionHead({ kicker, title, aside }) {
  return (
    <div className="mb-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-ink pt-5">
      <div>
        {kicker && <p className={eyebrow}>{kicker}</p>}
        <h2 className={`${serif} mt-1 text-[clamp(1.9rem,3.6vw,2.6rem)] font-medium leading-tight tracking-[-0.02em]`}>{title}</h2>
      </div>
      {aside && <p className="pb-1.5 text-sm text-muted">{aside}</p>}
    </div>
  );
}

function Preview({ p }) {
  const { src, alt, bg, fit } = p.preview;
  let host = '';
  try { host = new URL(p.url).hostname; } catch { /* internal projects have no url */ }
  return (
    <span className="block overflow-hidden rounded-xl border border-rule bg-card shadow-[0_1px_2px_rgba(23,25,28,0.04),0_12px_28px_-16px_rgba(23,25,28,0.25)] ">
      <span className="flex h-8 items-center gap-3 border-b border-rule bg-card px-3.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rule" /><span className="h-2 w-2 rounded-full bg-rule" /><span className="h-2 w-2 rounded-full bg-rule" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-paper px-2.5 py-0.5 text-center text-[11.5px] text-muted">{host}</span>
      </span>
      <span className="block aspect-[2/1] overflow-hidden" style={{ background: bg || undefined }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none`}
        />
      </span>
    </span>
  );
}

function ProjectRow({ p, i }) {
  const live = Boolean(p.url);
  const Tag = live ? 'a' : 'div';
  const linkProps = live ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <li>
      <Tag
        {...linkProps}
        className={`group grid grid-cols-[32px_1fr] gap-x-4 gap-y-6 border-b border-rule py-10 transition-colors motion-reduce:transition-none md:-mx-4 md:grid-cols-[48px_minmax(0,1fr)_minmax(0,430px)] md:gap-x-8 md:px-4 ${live ? `hover:bg-card/70 ${focus}` : ''}`}
      >
        <span className={`${serif} pt-1.5 text-[15px] tabular-nums text-muted md:col-start-1 md:row-start-1`}>{pad(i + 1)}</span>

        <span className="flex flex-col gap-4 md:col-start-2 md:row-start-1">
          <span className="flex items-start justify-between gap-4">
            <span className={`${serif} text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-tight tracking-[-0.015em] ${live ? 'group-hover:text-accent' : ''}`}>
              {p.title}
            </span>
          </span>
          <span className="max-w-[52ch] text-[16px] leading-relaxed text-muted">{p.text}</span>
          <span className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => {
              const { Icon, color } = skillIcons[s] || fallbackIcon;
              return (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-card py-1 pl-2.5 pr-3 text-[13px] text-ink/80">
                  <Icon size={14} color={color} aria-hidden="true" />
                  {s}
                </span>
              );
            })}
          </span>
          <span className="flex items-center gap-2 text-[14px] font-medium">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${live ? 'bg-accent' : 'bg-rule ring-1 ring-inset ring-muted/40'}`} />
            <span className={live ? 'text-accent' : 'text-muted'}>{p.access}</span>
            {live && (
              <span aria-hidden="true" className="text-lg leading-none text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none">↗</span>
            )}
          </span>
          {live && <span className="sr-only">Opens {p.title} in a new tab</span>}
        </span>

        {p.preview && (
          <span className="col-start-2 md:col-start-3 md:row-start-1">
            <Preview p={p} />
          </span>
        )}
      </Tag>
    </li>
  );
}

function SkillGroup({ s }) {
  return (
    <div className="border-t border-rule pt-5">
      <h3 className={`${serif} text-[24px] font-medium leading-tight tracking-[-0.01em]`}>{s.group}</h3>
      <p className="mt-1 text-[14.5px] text-muted">{s.note}</p>
      <ul className="mt-5 flex flex-col">
        {s.items.map((it) => {
          const { Icon, color } = skillIcons[it] || fallbackIcon;
          return (
            <li key={it} className="flex items-center gap-3.5 border-b border-rule/70 py-2.5 text-[15.5px] last:border-b-0">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rule bg-card">
                <Icon size={20} color={color} />
              </span>
              <span className="leading-snug">{it}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function App() {
  const liveCount = projects.filter((p) => p.url).length;
  const otherCount = projects.length - liveCount;
  const hasIntro = Boolean(profile.intro && profile.intro.trim());
  const current = experience[0];
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: LuMail },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: LuPhone },
    { label: 'LinkedIn', value: 'bless-florentino', href: profile.linkedin, Icon: FaLinkedin, external: true },
    { label: 'GitHub', value: 'BlessSF', href: profile.github, Icon: FaGithub, external: true },
  ];

  return (
    <div className="min-h-screen bg-paper text-[17px] leading-relaxed text-ink">
      <header className="border-b border-rule">
        <div className={`${wrap} flex items-center justify-between gap-6 py-5`}>
          <a href="#top" className={`${serif} text-[20px] font-semibold tracking-[-0.01em] ${focus}`}>{profile.name}</a>
          <nav aria-label="Primary" className="flex gap-5 text-[15px] text-muted sm:gap-8">
            {[['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']].map(([t, h]) => (
              <a key={h} href={h} className={`transition-colors hover:text-ink ${focus} ${t === 'Experience' ? 'hidden sm:inline' : ''}`}>{t}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="relative overflow-hidden">
          {/* faint ruled-ledger lines, fading out downward */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 47px, var(--color-rule) 47px, var(--color-rule) 48px)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 85%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 85%)',
            }}
          />
          <div className={`${wrap} relative pb-16 pt-14 md:pb-20 md:pt-20`}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-rule bg-card py-1.5 pl-3 pr-4 text-[14px] text-ink/80">
              <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 motion-reduce:hidden" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </p>

            <h1 className={`${serif} mt-8 text-[clamp(2.9rem,8.4vw,7rem)] font-medium leading-[0.98] tracking-[-0.035em]`}>
              {profile.name}
            </h1>
            <p className={`${eyebrow} mt-6`}>{profile.role}</p>

            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
              {hasIntro && <p className="max-w-[30ch] text-balance text-[clamp(1.35rem,2.5vw,1.9rem)] leading-snug text-ink/85">{profile.intro}</p>}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#work" className={`${btnPrimary} gap-2`}>
                  View projects
                  <LuArrowDown aria-hidden="true" size={17} />
                </a>
                <a href={profile.resume} download className={`${btnGhost} gap-2`}>
                  <LuDownload aria-hidden="true" size={17} />
                  Download résumé
                </a>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-1 gap-x-8 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
              {[
                [LuBriefcase, 'Currently', current.role, current.org],
                [LuGraduationCap, 'Education', education.degree, education.school],
                [LuLayers, 'Built', `${pad(liveCount)} live systems`, `${pad(otherCount)} internal or academic`],
                [LuMapPin, 'Based in', profile.location.split(',')[0], profile.location.split(',').slice(1).join(',').trim()],
              ].map(([Icon, k, v, sub]) => (
                <div key={k} className="flex gap-4 border-b border-rule py-6 lg:border-b-0">
                  <Icon aria-hidden="true" size={20} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <dt className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt>
                    <dd className="mt-1.5 text-[17px] font-medium leading-snug">{v}</dd>
                    <dd className="mt-0.5 text-[14.5px] leading-snug text-muted">{sub}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* work */}
        <section id="work" className={`${wrap} pb-24`}>
          <SectionHead kicker="Work" title="Selected systems" aside={`${liveCount} live · ${otherCount} internal / academic`} />
          <ol>{projects.map((p, i) => <ProjectRow key={p.title} p={p} i={i} />)}</ol>
        </section>

        {/* experience + education */}
        <section id="experience" className="border-y border-rule bg-card">
          <div className={`${wrap} py-20 md:py-24`}>
            <SectionHead kicker="Background" title="Experience & education" />
            <div className="divide-y divide-rule">
              {experience.map((e) => (
                <div key={e.role} className="grid gap-x-12 gap-y-4 py-10 md:grid-cols-[240px_1fr]">
                  <div>
                    <p className="text-[15px] font-medium tabular-nums text-accent">{e.period}</p>
                    <p className="mt-1 text-[14.5px] text-muted">{e.place}</p>
                  </div>
                  <div>
                    <h3 className={`${serif} text-[28px] font-medium leading-tight tracking-[-0.015em]`}>{e.role}</h3>
                    <p className="mb-5 mt-1 text-muted">{e.org}</p>
                    <ul className="flex max-w-[70ch] flex-col gap-3">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-3.5">
                          <span aria-hidden="true" className="mt-[0.78em] h-px w-4 shrink-0 bg-accent" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="grid gap-x-12 gap-y-4 py-10 md:grid-cols-[240px_1fr]">
                <div>
                  <p className="text-[15px] font-medium tabular-nums text-accent">{education.period}</p>
                  <p className="mt-1 text-[14.5px] text-muted">{education.place}</p>
                </div>
                <div>
                  <h3 className={`${serif} text-[28px] font-medium leading-tight tracking-[-0.015em]`}>{education.degree}</h3>
                  <p className="mt-1 text-muted">{education.school}</p>
                  <p className="mt-3">{education.major}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section id="skills" className={`${wrap} py-20 md:py-24`}>
          <SectionHead kicker="Toolkit" title="Technical skills" />
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => <SkillGroup key={s.group} s={s} />)}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="bg-night text-night-text">
          <div className={`${wrap} grid gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-24`}>
            <div>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[#7fc4a6]">Contact</p>
              <h2 className={`${serif} mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.025em]`}>
                Open to full-stack and business application roles.
              </h2>
              <p className="mt-6 flex items-center gap-2 text-night-muted">
                <LuMapPin aria-hidden="true" size={18} />
                Based in {profile.location}
              </p>
              <a href={profile.resume} download className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#e8efe9] px-6 py-3 text-[15px] font-medium text-night transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">
                <LuDownload aria-hidden="true" size={18} />
                Download résumé
              </a>
            </div>

            <ul className="self-end border-t border-white/15">
              {contacts.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="border-b border-white/15">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group -mx-4 flex items-center gap-5 px-4 py-5 transition-colors hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7fc4a6]"
                  >
                    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#7fc4a6]">
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[12.5px] font-semibold uppercase tracking-[0.12em] text-night-muted">{label}</span>
                      <span className="mt-0.5 block truncate text-[clamp(1.1rem,2vw,1.4rem)] font-medium">{value}</span>
                    </span>
                    <span aria-hidden="true" className="text-xl text-night-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7fc4a6] motion-reduce:transition-none">{external ? '↗' : '→'}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-night text-night-muted">
        <div className={wrap}>
          <div className="flex justify-between border-t border-white/10 py-6 text-[14px]">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <a href="#top" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
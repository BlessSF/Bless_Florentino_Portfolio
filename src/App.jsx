import { profile, experience, education, projects, skills } from './data.js';
import { skillIcons, fallbackIcon } from './skillIcons.jsx';

// All styling is Tailwind classes. Palette: black / deep navy / one blue accent.
const sans = 'font-[IBM_Plex_Sans,system-ui,-apple-system,Segoe_UI,Roboto,sans-serif]';
const mono = 'font-[IBM_Plex_Mono,ui-monospace,SFMono-Regular,Menlo,Consolas,monospace]';
const wrap = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4da3ff]';
const label = `${mono} text-xs uppercase tracking-[0.1em] text-[#4da3ff]`;
const muted = 'text-[#9fb0cc]';
const pad = (n) => String(n).padStart(2, '0');
const btnPrimary = `inline-block rounded-md bg-[#2f6fe0] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#3f7ff0] ${focus}`;
const btnGhost = `inline-block rounded-md border border-[#2a3f69] px-5 py-3 text-[15px] font-semibold text-[#eef3fb] transition-colors hover:border-[#4da3ff] hover:text-[#4da3ff] ${focus}`;

function SectionHead({ title, right }) {
  return (
    <div className="mb-3 flex items-baseline justify-between border-t border-[#2a3f69] pt-5">
      <h2 className="text-xl font-semibold tracking-[-0.01em]">{title}</h2>
      {right && <span className={label}>{right}</span>}
    </div>
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
        className={`group relative -mx-3 grid grid-cols-[36px_1fr_24px] items-start gap-x-3.5 gap-y-1.5 border-b border-[#1d2f52] px-3 py-7 transition-colors motion-reduce:transition-none md:grid-cols-[56px_1.5fr_1fr_32px] md:gap-6 ${live ? `hover:bg-[#0f2347] ${focus}` : ''}`}
      >
        <span className={`${mono} pt-1.5 text-[13px] ${muted}`}>{pad(i + 1)}</span>
        <span className="flex flex-col gap-1.5">
          <span className={`text-[24px] font-medium leading-tight tracking-[-0.015em] transition-colors ${live ? 'group-hover:text-[#4da3ff]' : ''}`}>{p.title}</span>
          <span className={`max-w-[52ch] ${muted}`}>{p.text}</span>
        </span>
        <span className="col-start-2 row-start-2 flex flex-col gap-1.5 pt-1.5 md:col-start-auto md:row-start-auto">
          <span className={`${mono} text-[12.5px] text-[#d5e2f7]`}>{p.stack.join(' · ')}</span>
          <span className={`text-[13.5px] ${live ? 'text-[#4da3ff]' : muted}`}>{p.access}</span>
        </span>
        {live && (
          <>
            <span aria-hidden="true" className="col-start-3 row-start-1 text-right text-xl text-[#9fb0cc] transition duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4da3ff] motion-reduce:transition-none md:col-start-auto md:row-start-auto">↗</span>
            <span className="sr-only">Open {p.title} in a new tab</span>
          </>
        )}
      </Tag>
    </li>
  );
}

function SkillItem({ name }) {
  const { Icon, color } = skillIcons[name] || fallbackIcon;
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#1d2f52] bg-[#0c1c3a]" aria-hidden="true">
        <Icon size={24} color={color} />
      </span>
      <span className="font-medium leading-snug text-[#eef3fb]">{name}</span>
    </li>
  );
}

function SkillRow({ s }) {
  return (
    <div className="grid gap-x-10 gap-y-6 border-b border-[#1d2f52] py-8 md:grid-cols-[240px_1fr]">
      <div>
        <h3 className="text-[22px] font-medium leading-tight tracking-[-0.015em]">{s.group}</h3>
        <p className={`mt-1.5 text-[14.5px] ${muted}`}>{s.note}</p>
      </div>
      <ul className="grid grid-cols-2 content-start gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        {s.items.map((it) => <SkillItem key={it} name={it} />)}
      </ul>
    </div>
  );
}

export default function App() {
  const liveCount = projects.filter((p) => p.url).length;
  const contacts = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ];

  return (
    <div className={`${sans} min-h-screen bg-[#05080f] text-base leading-relaxed text-[#eef3fb] antialiased`}>
      <div className="h-1 bg-[#2f6fe0]" aria-hidden="true" />

      <header className="bg-[#05080f]">
        <div className={`${wrap} flex items-center justify-between py-6`}>
          <a href="#top" className={`text-[17px] font-semibold ${focus}`}>{profile.name}</a>
          <nav aria-label="Primary" className={`flex gap-5 text-sm sm:gap-7 ${muted}`}>
            {[['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']].map(([t, h]) => (
              <a key={h} href={h} className={`transition-colors hover:text-white ${focus}`}>{t}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="bg-[#0a1730]">
          <div className={`${wrap} pb-16 pt-14 md:pb-24 md:pt-20`}>
            <p className={label}>{profile.role}</p>
            <div className="mt-7 grid items-end gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
              <h1 className="max-w-[17ch] text-[clamp(2.2rem,5.4vw,4rem)] font-semibold leading-[1.06] tracking-[-0.025em]">{profile.headline}</h1>
              <div>
                <p className={`mb-8 text-[17px] ${muted}`}>{profile.intro}</p>
                <div className="flex flex-wrap gap-3">
                  <a href="#work" className={btnPrimary}>View projects</a>
                  <a href={profile.resume} download className={btnGhost}>Download résumé</a>
                </div>
              </div>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-[#1d2f52] pt-6 md:grid-cols-4">
              {[
                ['Live systems', `${pad(liveCount)} deployed`],
                ['Education', 'BS Information Systems'],
                ['Current role', 'IT Specialist'],
                ['Based in', profile.location],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className={`${mono} text-[11.5px] uppercase tracking-[0.08em] ${muted}`}>{k}</dt>
                  <dd className="mt-1 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* work */}
        <section id="work" className={`${wrap} pt-20`}>
          <SectionHead title="Selected work" right={`${pad(projects.length)} projects`} />
          <ol className="mb-24">{projects.map((p, i) => <ProjectRow key={p.title} p={p} i={i} />)}</ol>
        </section>

        {/* experience + education */}
        <section id="experience" className="bg-[#0a1730]">
          <div className={`${wrap} grid gap-14 py-20 md:grid-cols-[1.6fr_1fr] md:gap-16`}>
            <div>
              <SectionHead title="Experience" />
              {experience.map((e) => (
                <div key={e.role} className="pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[22px] font-medium tracking-[-0.01em]">{e.role}</h3>
                    <span className={`${mono} text-[13px] text-[#4da3ff]`}>{e.period}</span>
                  </div>
                  <p className={`mb-4 ${muted}`}>{e.org} · {e.place}</p>
                  <ul className="flex flex-col gap-2.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.72em] h-1.5 w-1.5 shrink-0 bg-[#4da3ff]" />
                        <span className="text-[#d5e2f7]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <SectionHead title="Education" />
              <div className="pt-4">
                <span className={`${mono} text-[13px] text-[#4da3ff]`}>{education.period}</span>
                <h3 className="mt-1 text-[22px] font-medium tracking-[-0.01em]">{education.school}</h3>
                <p className="mt-1 font-medium">{education.degree}</p>
                <p className={muted}>{education.major}</p>
                <p className={`mt-1 ${muted}`}>{education.place}</p>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section id="skills" className={`${wrap} pt-20`}>
          <SectionHead title="Technical skills" />
          <div className="mb-24">
            {skills.map((s) => <SkillRow key={s.group} s={s} />)}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="bg-[#0a1730]">
          <div className={`${wrap} py-20`}>
            <SectionHead title="Contact" />
            <p className={`mb-6 mt-4 max-w-[48ch] text-[17px] ${muted}`}>Open to opportunities in business application and full-stack development.</p>
            <ul className="mb-9 flex flex-col items-start gap-2">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className={`border-b border-[#2a3f69] text-[clamp(1.3rem,3.2vw,2rem)] font-medium tracking-[-0.015em] transition-colors hover:border-[#4da3ff] hover:text-[#4da3ff] ${focus}`}>{c.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>GitHub ↗</a>
              <a href={profile.resume} download className={btnPrimary}>Download résumé</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} flex justify-between py-7 text-[13.5px] ${muted}`}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className={`transition-colors hover:text-white ${focus}`}>Back to top ↑</a>
      </footer>
    </div>
  );
}
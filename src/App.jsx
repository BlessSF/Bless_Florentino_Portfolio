import { profile, experience, education, projects, skills } from './data.js';

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

function ProjectRow({ p, i }) {
  const live = Boolean(p.url);
  const Tag = live ? 'a' : 'div';
  const linkProps = live ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <li>
      <Tag
        {...linkProps}
        className={`group grid grid-cols-[32px_1fr] gap-x-4 gap-y-3 border-b border-rule px-0 py-8 transition-colors motion-reduce:transition-none md:grid-cols-[64px_minmax(0,1.6fr)_minmax(0,1fr)] md:gap-x-8 md:px-4 md:-mx-4 ${live ? `hover:bg-card ${focus}` : ''}`}
      >
        <span className={`${serif} pt-1.5 text-[15px] tabular-nums text-muted`}>{pad(i + 1)}</span>

        <span className="flex flex-col gap-2">
          <span className="flex items-start justify-between gap-4">
            <span className={`${serif} text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-tight tracking-[-0.015em] ${live ? 'group-hover:text-accent' : ''}`}>
              {p.title}
            </span>
            {live && (
              <span aria-hidden="true" className="mt-1 text-xl leading-none text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none md:hidden">↗</span>
            )}
          </span>
          <span className="max-w-[56ch] text-[16px] leading-relaxed text-muted">{p.text}</span>
        </span>

        <span className="col-start-2 flex flex-col gap-3 md:col-start-auto md:items-end md:text-right">
          <span className="flex flex-wrap gap-1.5 md:justify-end">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-rule bg-card px-2.5 py-0.5 text-[13px] text-ink/80">{s}</span>
            ))}
          </span>
          <span className="flex items-center gap-2 text-[14px] font-medium">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${live ? 'bg-accent' : 'bg-rule ring-1 ring-inset ring-muted/40'}`} />
            <span className={live ? 'text-accent' : 'text-muted'}>{p.access}</span>
            {live && (
              <span aria-hidden="true" className="hidden text-lg leading-none text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none md:inline">↗</span>
            )}
          </span>
          {live && <span className="sr-only">Opens {p.title} in a new tab</span>}
        </span>
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
        {s.items.map((it) => (
          <li key={it} className="border-b border-rule/70 py-2 text-[15.5px] last:border-b-0">{it}</li>
        ))}
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
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
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
        <section className={`${wrap} pb-20 pt-16 md:pb-28 md:pt-24`}>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className={eyebrow}>{profile.role}</p>
              <h1 className={`${serif} mt-6 text-[clamp(3rem,8vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.035em]`}>
                {profile.name}
              </h1>
              {hasIntro && <p className="mt-8 max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug text-ink/80">{profile.intro}</p>}
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#work" className={btnPrimary}>View projects</a>
                <a href={profile.resume} download className={btnGhost}>Download résumé</a>
              </div>
            </div>

            <dl className="self-end border-t border-ink lg:border-l lg:border-t-0 lg:pl-8">
              {[
                ['Currently', `${current.role}, ${current.org}`],
                ['Education', `${education.degree}, ${education.school}`],
                ['Built', `${pad(liveCount)} live systems, ${pad(otherCount)} internal or academic`],
                ['Based in', profile.location],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-rule py-4 lg:first:pt-0 lg:last:border-b-0">
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt>
                  <dd className="mt-1 text-[16.5px] leading-snug">{v}</dd>
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
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => <SkillGroup key={s.group} s={s} />)}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="bg-night text-night-text">
          <div className={`${wrap} py-20 md:py-28`}>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[#7fc4a6]">Contact</p>
            <h2 className={`${serif} mt-4 max-w-[18ch] text-[clamp(2.2rem,5.2vw,4rem)] font-medium leading-[1.05] tracking-[-0.025em]`}>
              Open to full-stack and business application roles.
            </h2>
            <p className="mt-6 max-w-[52ch] text-night-muted">Based in Iloilo, Philippines. The quickest way to reach me is email.</p>

            <ul className="mt-10 flex flex-col items-start gap-3">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="text-[clamp(1.25rem,2.8vw,1.9rem)] font-medium tracking-[-0.01em] underline decoration-white/25 decoration-1 underline-offset-[10px] transition-colors hover:decoration-[#7fc4a6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">{c.label}</a>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3">
              {[['LinkedIn', profile.linkedin], ['GitHub', profile.github]].map(([t, h]) => (
                <a key={t} href={h} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-[15px] font-medium transition-colors hover:bg-white hover:text-night focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">{t} ↗</a>
              ))}
              <a href={profile.resume} download className="inline-flex items-center rounded-full bg-[#e8efe9] px-6 py-3 text-[15px] font-medium text-night transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">Download résumé</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-night text-night-muted">
        <div className={`${wrap} flex justify-between border-t border-white/10 py-6 text-[14px]`}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fc4a6]">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
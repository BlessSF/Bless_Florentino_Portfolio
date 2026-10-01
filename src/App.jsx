import { profile, capabilities, projects } from './data.js';

// Reusable class strings (all styling lives here, no separate CSS file).
const sans = 'font-[IBM_Plex_Sans,system-ui,-apple-system,Segoe_UI,Roboto,sans-serif]';
const mono = 'font-[IBM_Plex_Mono,ui-monospace,SFMono-Regular,Menlo,Consolas,monospace]';
const wrap = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d3f72]';
const label = `${mono} text-xs uppercase tracking-[0.08em] text-[#5d625f]`;
const pad = (n) => String(n).padStart(2, '0');

function SectionHead({ title, right }) {
  return (
    <div className="mb-2 flex items-baseline justify-between border-t border-[#14161a] pt-5">
      <h2 className="text-[15px] font-semibold">{title}</h2>
      {right && <span className={label}>{right}</span>}
    </div>
  );
}

export default function App() {
  const contacts = [
    profile.email && { label: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.github && { label: 'GitHub', href: profile.github },
  ].filter(Boolean);

  return (
    <div className={`${sans} min-h-screen bg-[#fafaf8] text-base leading-relaxed text-[#14161a] antialiased`}>
      <header className={`${wrap} flex items-center justify-between border-b border-[#d8d8d2] py-6`}>
        <a href="#top" className={`text-[17px] font-semibold ${focus}`}>{profile.name}</a>
        <nav aria-label="Primary" className="flex gap-5 text-sm text-[#5d625f] sm:gap-7">
          {[['Work', '#work'], ['Capabilities', '#capabilities'], ['Contact', '#contact']].map(([t, h]) => (
            <a key={h} href={h} className={`transition-colors hover:text-[#14161a] ${focus}`}>{t}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className={`${wrap} pb-16 pt-14 md:pb-24 md:pt-22`}>
          <p className={label}>{profile.role}</p>
          <div className="mt-7 grid items-end gap-8 md:grid-cols-[1.6fr_1fr] md:gap-16">
            <h1 className="max-w-[18ch] text-[clamp(2.1rem,5.2vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.025em]">
              {profile.headline}
            </h1>
            <div>
              <p className="mb-7 text-[17px] text-[#5d625f]">{profile.intro}</p>
              <dl className="grid grid-cols-2 gap-5 border-t border-[#d8d8d2] pt-5">
                <div>
                  <dt className={`${mono} text-[11.5px] uppercase tracking-[0.08em] text-[#5d625f]`}>Projects</dt>
                  <dd className="mt-1 font-medium">{pad(projects.length)} live</dd>
                </div>
                <div>
                  <dt className={`${mono} text-[11.5px] uppercase tracking-[0.08em] text-[#5d625f]`}>Based in</dt>
                  <dd className="mt-1 font-medium">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="work" className={wrap}>
          <SectionHead title="Selected work" right={`${pad(projects.length)} projects`} />
          <ol className="mb-24 md:mb-26">
            {projects.map((p, i) => (
              <li key={p.title}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative -mx-3 grid grid-cols-[36px_1fr_24px] items-start gap-x-3.5 gap-y-1.5 border-b border-[#d8d8d2] px-3 py-7 transition-colors hover:bg-[#f0f0ec] motion-reduce:transition-none md:grid-cols-[56px_1.5fr_1fr_32px] md:gap-6 ${focus}`}
                >
                  <span className={`${mono} pt-1.5 text-[13px] text-[#5d625f]`}>{pad(i + 1)}</span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[26px] font-medium leading-tight tracking-[-0.015em] transition-colors group-hover:text-[#1d3f72]">{p.title}</span>
                    <span className="max-w-[52ch] text-[#5d625f]">{p.text}</span>
                  </span>
                  <span className="col-start-2 row-start-2 flex flex-col gap-1.5 pt-1.5 md:col-start-auto md:row-start-auto">
                    <span className={`${mono} text-[12.5px]`}>{p.stack.join(' · ')}</span>
                    <span className="text-[13.5px] text-[#5d625f]">{p.access}</span>
                  </span>
                  <span aria-hidden="true" className="col-start-3 row-start-1 text-right text-xl text-[#5d625f] transition duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1d3f72] motion-reduce:transition-none md:col-start-auto md:row-start-auto">↗</span>
                  <span className="sr-only">Open {p.title} in a new tab</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="capabilities" className={wrap}>
          <SectionHead title="Capabilities" />
          <div className="grid gap-7 pb-24 pt-7 md:grid-cols-3 md:gap-10 md:pb-26">
            {capabilities.map((c) => (
              <div key={c.title}>
                <h3 className="mb-2 text-[17px] font-semibold">{c.title}</h3>
                <p className="max-w-[34ch] text-[#5d625f]">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={wrap}>
          <SectionHead title="Contact" />
          {contacts.length ? (
            <ul className="mb-28 mt-5 flex flex-col items-start gap-1.5">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className={`border-b border-[#d8d8d2] text-[clamp(1.4rem,3.4vw,2.1rem)] font-medium tracking-[-0.015em] transition-colors hover:border-[#1d3f72] hover:text-[#1d3f72] ${focus}`}>{c.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-28 mt-5 text-[#5d625f]">Add your email or phone in <code className={`${mono} bg-[#f0f0ec] px-1.5 py-0.5 text-sm`}>src/data.js</code>.</p>
          )}
        </section>
      </main>

      <footer className={`${wrap} flex justify-between border-t border-[#d8d8d2] pb-9 pt-5 text-[13.5px] text-[#5d625f]`}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className={`transition-colors hover:text-[#14161a] ${focus}`}>Back to top ↑</a>
      </footer>
    </div>
  );
}


const projects = [
  {
    number: "01",
    title: "Robot autonome",
    category: "ROBOTIQUE",
    description: "Des robots capables d'analyser leur environnement et de prendre des décisions.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Systèmes embarqués",
    category: "ÉLECTRONIQUE",
    description: "Des idées intelligentes construites avec Arduino, ESP32 et des capteurs.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Intelligence artificielle",
    category: "IA & INNOVATION",
    description: "Explorer de nouvelles possibilités grâce au code et à l'intelligence artificielle.",
    icon: "◎",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-2xl text-cyan-300">
            ◈
          </span>
          <span className="text-sm font-black tracking-[0.16em] sm:text-base">
            DAKO<span className="text-cyan-400">TECH</span>
            <span className="block text-[10px] font-medium tracking-[0.3em] text-slate-400">
              ROBOTICS CLUB
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-cyan-300" href="#accueil">Accueil</a>
          <a className="transition hover:text-cyan-300" href="#apropos">À propos</a>
          <a className="transition hover:text-cyan-300" href="#projets">Projets</a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg border border-cyan-400/60 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Nous contacter ↗
        </a>
      </header>

      <section id="accueil" className="relative isolate">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 text-xs tracking-wider text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              INNOVATION · ROBOTIQUE · FUTUR
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Construisons
              <br />
              <span className="text-cyan-400">le futur,</span>
              <br />
              un robot à la fois.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Bienvenue chez DAKOTECH ROBOTICS CLUB. Nous transformons les idées
              en projets concrets grâce à la robotique, l'électronique et la programmation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Découvrir nos projets →
              </a>
              <a
                href="#apropos"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/60"
              >
                Explorer le club
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">CRÉER<span className="text-cyan-400">.</span></p>
                <p className="mt-1 text-xs tracking-widest text-slate-500">IMAGINER</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">CODER<span className="text-cyan-400">.</span></p>
                <p className="mt-1 text-xs tracking-widest text-slate-500">CONSTRUIRE</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">INNOVER<span className="text-cyan-400">.</span></p>
                <p className="mt-1 text-xs tracking-widest text-slate-500">PROGRESSER</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-950/60 p-6 shadow-2xl shadow-cyan-950/40 sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs tracking-[0.25em] text-cyan-300">DAKOTECH / LAB</span>
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  SYSTEM ONLINE
                </span>
              </div>

              <div className="relative flex aspect-square items-center justify-center">
                <div className="absolute h-[82%] w-[82%] rounded-full border border-cyan-400/20" />
                <div className="absolute h-[64%] w-[64%] rounded-full border border-dashed border-cyan-300/30" />
                <div className="absolute h-[45%] w-[45%] rounded-full border border-blue-400/40" />
                <div className="absolute h-[72%] w-[72%] animate-spin rounded-full border border-transparent border-t-cyan-300/70" style={{ animationDuration: "12s" }} />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_60px_rgba(34,211,238,0.16)] sm:h-44 sm:w-44">
                  <svg viewBox="0 0 120 120" className="w-28 text-cyan-300 sm:w-36" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="25" y="32" width="70" height="58" rx="13" />
                    <path d="M60 17v15M48 17h24M40 48h12v12H40zM68 48h12v12H68zM44 75h32M17 52h8M95 52h8M42 90v10M78 90v10" />
                    <circle cx="46" cy="54" r="2" fill="currentColor" />
                    <circle cx="74" cy="54" r="2" fill="currentColor" />
                  </svg>
                </div>
                <span className="absolute right-0 top-[20%] rounded-lg border border-cyan-400/20 bg-slate-950/90 px-3 py-2 text-xs text-cyan-300">AI / ACTIVE</span>
                <span className="absolute bottom-[17%] left-0 rounded-lg border border-blue-400/20 bg-slate-950/90 px-3 py-2 text-xs text-blue-300">ROBOTICS v1.0</span>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                <div><p className="text-xs text-slate-500">DESIGN</p><p className="mt-1 text-sm text-cyan-300">01</p></div>
                <div><p className="text-xs text-slate-500">BUILD</p><p className="mt-1 text-sm text-cyan-300">02</p></div>
                <div><p className="text-xs text-slate-500">INNOVATE</p><p className="mt-1 text-sm text-cyan-300">03</p></div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs tracking-[0.25em] text-slate-600">ENGINEER TOMORROW, TODAY.</p>
          </div>
        </div>
      </section>

      <section id="apropos" className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">QUI SOMMES-NOUS ?</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            La technologie prend vie grâce à nos idées.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            DAKOTECH ROBOTICS CLUB est un espace dédié à l'apprentissage,
            à l'expérimentation et à la création. Notre ambition est de concevoir
            des solutions intelligentes, de partager nos connaissances et de
            repousser les limites de l'innovation.
          </p>
        </div>
      </section>

      <section id="projets" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">NOTRE UNIVERS</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Explorer nos domaines</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Des premières expériences aux systèmes avancés, chaque projet est une nouvelle aventure.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]">
              <div className="flex items-center justify-between">
                <span className="text-4xl text-cyan-300">{project.icon}</span>
                <span className="text-xs tracking-widest text-slate-600">{project.number} / 03</span>
              </div>
              <p className="mt-8 text-[10px] font-bold tracking-[0.25em] text-cyan-400">{project.category}</p>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
              <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1">
                En savoir plus →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/60 to-blue-950/50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">TON AVENTURE COMMENCE ICI</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black sm:text-5xl">
            Prêt à construire le futur avec nous ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Tu aimes la robotique, l'électronique ou la programmation ?
            Rejoins notre aventure et donnons vie à tes idées.
          </p>
          <a href="mailto:contact@dakotech.example" className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300">
            Prendre contact ↗
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Adresse e-mail provisoire à remplacer par celle du club.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center lg:px-4">
          <p>© {new Date().getFullYear()} DAKOTECH ROBOTICS CLUB</p>
          <p>Conçu avec passion pour la robotique et l'innovation.</p>
        </div>
      </footer>
    </main>
  );
}

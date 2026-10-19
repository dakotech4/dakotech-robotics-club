export default function APropos() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-cyan-400 transition hover:text-cyan-300"
        >
          ← Retour à l’accueil
        </a>

        <p className="mt-12 text-sm font-bold tracking-[0.3em] text-cyan-400">
          DAKOTECH ROBOTICS CLUB
        </p>

        <h1 className="mt-5 text-4xl font-black sm:text-6xl">
          À propos de notre club
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          DAKOTECH ROBOTICS CLUB est un espace dédié à la robotique,
          à l’électronique, à la programmation et à l’intelligence artificielle.
          Nous apprenons, expérimentons et construisons ensemble des solutions
          innovantes pour préparer le futur.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <section className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold text-cyan-300">
              Notre mission
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Apprendre par la pratique, partager nos connaissances et donner
              vie aux idées grâce à la technologie.
            </p>
          </section>

          <section className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold text-cyan-300">
              Notre vision
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Encourager la créativité et développer des compétences en
              robotique et en innovation technologique.
            </p>
          </section>
        </div>

        <a
          href="/#projets"
          className="mt-10 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Découvrir nos projets →
        </a>
      </div>
    </main>
  );
}

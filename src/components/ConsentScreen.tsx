export default function ConsentScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl rounded-[2rem] border border-white/60 bg-white/45 p-10 text-center shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 text-4xl font-light text-slate-900">
          Consentement
        </h2>

        <p className="mb-4 text-lg leading-8 text-slate-700">
          Votre participation est volontaire et anonyme.
        </p>

        <p className="mb-4 text-lg leading-8 text-slate-700">
          Les réponses seront utilisées uniquement dans le cadre d'un mémoire de Master 2.
        </p>

        <p className="mb-8 text-lg leading-8 text-slate-700">
          En poursuivant, vous acceptez de participer à cette étude.
        </p>

        <button
          onClick={onContinue}
          className="rounded-full bg-slate-900 px-9 py-4 text-white shadow-xl transition hover:scale-105"
        >
          Continuer
        </button>
      </div>
    </section>
  );
}
export default function ConceptScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl rounded-[2rem] border border-white/60 bg-white/45 p-10 text-center shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 text-4xl font-light text-slate-900">
          Présentation du concept
        </h2>

        <p className="mb-8 text-lg leading-8 text-slate-700">
          Imaginez une marque associant naturalité, expertise scientifique et expérience sensorielle,
          qui considère la peau comme influencée par les émotions, l’environnement et le mode de vie.
          Elle propose une approche personnalisée du soin et vise à aider les consommateurs à mieux
          comprendre leur peau grâce à une communication claire tout en offrant une expérience de soin engageante.
        </p>

        <button
          onClick={onContinue}
          className="rounded-full bg-slate-900 px-9 py-4 text-white shadow-xl transition hover:scale-105"
        >
          Découvrir le questionnaire
        </button>
      </div>
    </section>
  );
}
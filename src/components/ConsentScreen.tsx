export default function ConsentScreen({
  onContinue,
  lang,
}: {
  onContinue: () => void;
  lang: "fr" | "en";
}) {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl rounded-[2rem] border border-white/60 bg-white/45 p-10 text-center shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 text-4xl font-light text-slate-900">
          {lang === "fr" ? "Consentement" : "Consent"}
        </h2>

        <p className="mb-4 text-lg leading-8 text-slate-700">
          {lang === "fr"
            ? "Votre participation est volontaire et anonyme."
            : "Your participation is voluntary and anonymous."}
        </p>

        <p className="mb-4 text-lg leading-8 text-slate-700">
          {lang === "fr"
            ? "Les réponses seront utilisées dans le cadre d’un mémoire de Master 2 et pour soutenir le développement d’un projet innovant en dermocosmétique."
            : "The responses will be used as part of a Master’s thesis and to support the development of an innovative dermocosmetic project."}
        </p>

        <p className="mb-8 text-lg leading-8 text-slate-700">
          {lang === "fr"
            ? "En poursuivant, vous acceptez de participer à cette étude."
            : "By continuing, you agree to participate in this study."}
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="rounded-full bg-slate-900 px-9 py-4 text-white shadow-xl transition hover:scale-105"
        >
          {lang === "fr" ? "Découvrir le questionnaire" : "Start the questionnaire"}
        </button>
      </div>
    </section>
  );
}
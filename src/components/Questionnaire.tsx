"use client";

import { useState } from "react";
import { questionnaireSections } from "@/data/questions";
import { saveAnswers } from "@/utils/saveAnswers";

export default function Questionnaire() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [submitted, setSubmitted] = useState(false);

  const section = questionnaireSections[sectionIndex];
  const progress = ((sectionIndex + 1) / questionnaireSections.length) * 100;

  const handleAnswer = (id: string, value: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

const next = async () => {
  if (sectionIndex < questionnaireSections.length - 1) {
    setSectionIndex(sectionIndex + 1);
  } else {
    const success = await saveAnswers(answers);

    if (success) {
      setSubmitted(true);
    } else {
      alert("Erreur lors de l'envoi.");
    }
  }
};

  const previous = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
    }
  };

  if (submitted) {
    return (
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl rounded-[2rem] border border-white/60 bg-white/55 p-10 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-3xl text-white">
            ✓
          </div>

          <h2 className="mb-4 text-4xl font-light text-slate-900">
            Questionnaire envoyé avec succès
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Merci pour votre participation. Votre contribution est précieuse pour cette recherche.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl rounded-[2rem] border border-white/60 bg-white/55 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8">
          <div className="mb-3 flex justify-between text-sm text-slate-600">
            <span>
              Section {sectionIndex + 1}/{questionnaireSections.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-2 w-full rounded-full bg-white/70">
            <div
              className="h-2 rounded-full bg-slate-900 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="mb-8 text-center text-4xl font-light text-slate-900">
          {section.title}
        </h2>

        {section.questions.some((q) => q.type === "likert") && (
          <div className="mb-6 rounded-2xl bg-white/45 p-4 text-center text-sm text-slate-600">
            Échelle : 1 = Pas du tout d'accord · 5 = Tout à fait d'accord
          </div>
        )}

        <div className="space-y-6">
          {section.questions.map((q) => (
            <div key={q.id} className="rounded-3xl bg-white/50 p-5 shadow-sm">
              <p className="mb-4 text-lg leading-7 text-slate-800">{q.text}</p>

              {q.type === "likert" && (
                <div className="flex flex-wrap justify-between gap-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(q.id, value)}
                      className={`h-12 w-12 rounded-full border text-base transition-all ${
                        answers[q.id] === value
                          ? "bg-slate-900 text-white shadow-lg"
                          : "bg-white/70 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              )}

              {q.type === "choice" && q.options && (
                <div className="flex flex-wrap gap-3">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(q.id, option)}
                      className={`rounded-full border px-4 py-2 transition-all ${
                        answers[q.id] === option
                          ? "bg-slate-900 text-white shadow-lg"
                          : "bg-white/70 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {q.type === "open" && (
                <textarea
                  value={answers[q.id] ?? ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  placeholder="Votre réponse..."
                  className="min-h-28 w-full rounded-2xl border border-white/70 bg-white/75 p-4 text-slate-800 outline-none transition focus:border-slate-400"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between">
          <button
            disabled={sectionIndex === 0}
            onClick={previous}
            className="rounded-full bg-white/70 px-6 py-3 text-slate-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Précédent
          </button>

          <button
            onClick={next}
            className="rounded-full bg-slate-900 px-8 py-3 text-white shadow-xl transition hover:scale-105"
          >
            {sectionIndex === questionnaireSections.length - 1
              ? "Envoyer"
              : "Suivant"}
          </button>
        </div>
      </div>
    </section>
  );
}
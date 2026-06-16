"use client";

import { useMemo, useState } from "react";
import { questionnaireSections } from "@/data/questions";
import { saveAnswers } from "@/utils/saveAnswers";

type Lang = "fr" | "en";

export default function Questionnaire({ lang }: { lang: Lang }) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const section = questionnaireSections[sectionIndex];
  const progress = ((sectionIndex + 1) / questionnaireSections.length) * 100;

const countryCodes = [
  "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW",
  "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT",
  "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM",
  "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD",
  "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC",
  "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF",
  "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU",
  "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN",
  "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE",
  "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT",
  "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT",
  "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP",
  "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK",
  "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE",
  "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST",
  "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS",
  "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH",
  "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE",
  "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE",
  "ZM", "ZW",
];

const countryList = useMemo(() => {
  const displayNames = new Intl.DisplayNames([lang], { type: "region" });

  return countryCodes
    .map((code) => displayNames.of(code))
    .filter((country): country is string => Boolean(country))
    .sort((a, b) => a.localeCompare(b, lang));
}, [lang]);

  const handleAnswer = (id: string, value: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const next = async () => {
    const newErrors: Record<string, boolean> = {};

    section.questions.forEach((q) => {
      const answer = answers[q.id];

      if (
        q.required &&
        (answer === undefined || answer === "" || answer === null)
      ) {
        newErrors[q.id] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (sectionIndex < questionnaireSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const success = await saveAnswers(answers);

      if (success) {
        setSubmitted(true);
      } else {
        alert(lang === "fr" ? "Erreur lors de l’envoi." : "Submission error.");
      }
    }
  };

  const previous = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
            {lang === "fr"
              ? "Questionnaire envoyé avec succès"
              : "Questionnaire submitted successfully"}
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            {lang === "fr"
              ? "Merci pour votre participation. Votre contribution est précieuse pour cette recherche."
              : "Thank you for your participation. Your contribution is valuable for this research."}
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
          {section.title[lang]}
        </h2>

        {section.intro && (
          <div className="mb-8 rounded-3xl border border-white/60 bg-white/50 p-6 text-center shadow-sm">
            <p className="text-lg leading-8 text-slate-700">
              {section.intro[lang]}
            </p>
          </div>
        )}

        {section.questions.some((q) => q.type === "likert") && (
          <div className="mb-6 rounded-2xl bg-white/45 p-4 text-center text-sm text-slate-600">
            {lang === "fr"
              ? "Échelle : 1 = Pas du tout d’accord · 5 = Tout à fait d’accord"
              : "Scale: 1 = Strongly disagree · 5 = Strongly agree"}
          </div>
        )}

        <div className="space-y-6">
          {section.questions.map((q) => (
            <div
              key={q.id}
              className={`rounded-3xl bg-white/50 p-5 shadow-sm ${
                errors[q.id] ? "border border-red-300" : ""
              }`}
            >
              <p className="mb-4 text-lg leading-7 text-slate-800">
                {q.text[lang]}
              </p>

              {q.type === "country" && (
                <select
                  value={(answers[q.id] as string) ?? ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full rounded-2xl border border-white/70 bg-white/80 p-4 text-slate-800 outline-none transition focus:border-slate-400"
                >
                  <option value="">
                    {lang === "fr"
                      ? "Sélectionnez votre pays"
                      : "Select your country"}
                  </option>

                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}

              {q.type === "likert" && (
                <div className="flex flex-wrap justify-between gap-3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
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
                  {q.options[lang].map((option) => (
                    <button
                      key={option}
                      type="button"
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
                  value={(answers[q.id] as string) ?? ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  placeholder={
                    lang === "fr" ? "Votre réponse..." : "Your answer..."
                  }
                  className="min-h-28 w-full rounded-2xl border border-white/70 bg-white/75 p-4 text-slate-800 outline-none transition focus:border-slate-400"
                />
              )}

              {errors[q.id] && (
                <p className="mt-3 rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
                  {lang === "fr"
                    ? "La réponse à cette question est obligatoire."
                    : "This question is required."}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-between">
          <button
            type="button"
            disabled={sectionIndex === 0}
            onClick={previous}
            className="rounded-full bg-white/70 px-6 py-3 text-slate-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {lang === "fr" ? "Précédent" : "Previous"}
          </button>

          <button
            type="button"
            onClick={next}
            className="rounded-full bg-slate-900 px-8 py-3 text-white shadow-xl transition hover:scale-105"
          >
            {sectionIndex === questionnaireSections.length - 1
              ? lang === "fr"
                ? "Envoyer"
                : "Submit"
              : lang === "fr"
              ? "Suivant"
              : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
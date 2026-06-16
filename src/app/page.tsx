"use client";

import { useRef, useState } from "react";
import { Sparkles, Volume2, VolumeX } from "lucide-react";
import ConsentScreen from "@/components/ConsentScreen";
import Questionnaire from "@/components/Questionnaire";

type Lang = "fr" | "en";

export default function Home() {

  const [step, setStep] = useState<"home" | "consent" | "questionnaire">("home");

  const [lang, setLang] = useState<Lang>("fr");

  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicEnabled) {
      audioRef.current.pause();
      setMusicEnabled(false);
    } else {
      audioRef.current.volume = 0.12;
      audioRef.current.play();
      setMusicEnabled(true);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-full w-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <audio ref={audioRef} src="/ambient.mp3" loop />

      <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px]" />

      {step === "home" && (
        <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="absolute right-8 top-8 z-30 flex gap-2 rounded-full border border-white/60 bg-white/40 p-2 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                lang === "fr"
                  ? "bg-slate-900 text-white"
                  : "bg-white/50 text-slate-700 hover:bg-white/70"
              }`}
            >
              🇫🇷 Français
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                lang === "en"
                  ? "bg-slate-900 text-white"
                  : "bg-white/50 text-slate-700 hover:bg-white/70"
              }`}
            >
              🇬🇧 English
            </button>
          </div>

          <div className="max-w-5xl text-center">
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-3 text-sm text-slate-700 backdrop-blur-md shadow-lg">
              <Sparkles size={16} />
              {lang === "fr"
                ? "Expérience neuro-dermocosmétique"
                : "Neuro-dermocosmetic experience"}
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-light leading-tight tracking-tight text-slate-900 md:text-7xl">
              {lang === "fr"
                ? "Votre avis inspire l'innovation"
                : "Your insights inspire innovation"}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {lang === "fr"
                ? "Contribuez à une étude sur la dermocosmétique, les émotions et l’expérience de soin"
                : "Contribute to a study exploring dermocosmetics, emotions, and the skincare experience"}
            </p>

            <div className="mt-12">
              <button
                onClick={() => setStep("consent")}
                className="rounded-full bg-slate-900 px-10 py-5 text-lg font-medium text-white shadow-2xl shadow-slate-900/30 transition-all duration-300 hover:scale-105"
              >
                {lang === "fr"
                  ? "Commencer l'expérience"
                  : "Start the experience"}
              </button>
            </div>
          </div>
        </section>
      )}

{step === "consent" && (
  <ConsentScreen
    lang={lang}
    onContinue={() => setStep("questionnaire")}
  />
)}

      {step === "questionnaire" && <Questionnaire lang={lang} />}

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-20 flex items-center gap-3 rounded-full bg-slate-900/80 px-5 py-3 text-white backdrop-blur-md shadow-xl transition-all hover:bg-slate-900 hover:scale-105"
      >
        {musicEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}

        <span className="text-sm">
          {musicEnabled
            ? lang === "fr"
              ? "Ambiance activée"
              : "Ambience enabled"
            : lang === "fr"
            ? "Activer l'ambiance sonore"
            : "Enable sound ambience"}
        </span>
      </button>
    </main>
  );
}
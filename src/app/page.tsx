"use client";

import { useRef, useState } from "react";
import { Sparkles, Volume2, VolumeX } from "lucide-react";
import ConsentScreen from "@/components/ConsentScreen";
import ConceptScreen from "@/components/ConceptScreen";
import Questionnaire from "@/components/Questionnaire";

export default function Home() {
  const [step, setStep] = useState<
    "home" | "consent" | "concept" | "questionnaire"
  >("home");

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
      <video autoPlay muted loop playsInline className="fixed inset-0 h-full w-full object-cover">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <audio ref={audioRef} src="/ambient.mp3" loop />

      <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px]" />

      {step === "home" && (
        <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-3 text-sm text-slate-700 backdrop-blur-md shadow-lg">
              <Sparkles size={16} />
              Expérience neuro-dermocosmétique
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-light leading-tight tracking-tight text-slate-900 md:text-7xl">
              Découvrez une nouvelle approche dermocosmétique
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Une expérience inspirée par la science, les émotions et le bien-être de la peau.
            </p>

            <div className="mt-12">
              <button
                onClick={() => setStep("consent")}
                className="rounded-full bg-slate-900 px-10 py-5 text-lg font-medium text-white shadow-2xl shadow-slate-900/30 transition-all duration-300 hover:scale-105"
              >
                Commencer l'expérience
              </button>
            </div>
          </div>
        </section>
      )}

      {step === "consent" && (
        <ConsentScreen onContinue={() => setStep("concept")} />
      )}

      {step === "concept" && (
        <ConceptScreen onContinue={() => setStep("questionnaire")} />
      )}

      {step === "questionnaire" && <Questionnaire />}

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-20 flex items-center gap-3 rounded-full bg-slate-900/80 px-5 py-3 text-white backdrop-blur-md shadow-xl transition-all hover:bg-slate-900 hover:scale-105"
      >
        {musicEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}

        <span className="text-sm">
          {musicEnabled ? "Ambiance activée" : "Activer l'ambiance sonore"}
        </span>
      </button>
    </main>
  );
}

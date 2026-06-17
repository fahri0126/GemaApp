"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { PageWrapper } from "@/components/page-wrapper";

// Data dummy (bisa Anda ganti dengan fetch API di masa depan)
const dummyQuiz = {
  title: "Algoritma & Pemrograman",
  questions: [
    {
      id: 1,
      type: "multiple_choice",
      question: "Apa yang dimaksud dengan algoritma?",
      options: [
        { label: "A", text: "Bahasa pemrograman tingkat tinggi" },
        {
          label: "B",
          text: "Urutan langkah-langkah logis untuk menyelesaikan masalah",
        },
        { label: "C", text: "Perangkat lunak untuk mengolah data" },
        { label: "D", text: "Struktur data berbentuk pohon" },
      ],
      correct: "B",
    },
    {
      id: 2,
      type: "multiple_choice",
      question: "Manakah yang termasuk struktur kontrol perulangan?",
      options: [
        { label: "A", text: "if-else" },
        { label: "B", text: "switch-case" },
        { label: "C", text: "for loop" },
        { label: "D", text: "try-catch" },
      ],
      correct: "C",
    },
    {
      id: 3,
      type: "true_false",
      question:
        "Array adalah struktur data yang menyimpan elemen dengan tipe data berbeda-beda.",
      options: [
        { label: "A", text: "Benar" },
        { label: "B", text: "Salah" },
      ],
      correct: "B",
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "Kompleksitas waktu algoritma Binary Search adalah?",
      options: [
        { label: "A", text: "O(n)" },
        { label: "B", text: "O(n²)" },
        { label: "C", text: "O(log n)" },
        { label: "D", text: "O(1)" },
      ],
      correct: "C",
    },
    {
      id: 5,
      type: "multiple_choice",
      question: "Apa output dari fungsi rekursif faktorial(3)?",
      options: [
        { label: "A", text: "3" },
        { label: "B", text: "6" },
        { label: "C", text: "9" },
        { label: "D", text: "12" },
      ],
      correct: "B",
    },
  ],
};

export default function KuisPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [seconds, setSeconds] = useState(0);

  const question = dummyQuiz.questions[current];
  const total = dummyQuiz.questions.length;
  const progress = ((current + 1) / total) * 100;

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  function handleAnswer(label: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: label }));
  }

  function handleFinish() {
    let correct = 0;
    dummyQuiz.questions.forEach((q) => {
      if (answers[q.id] === q.correct) correct++;
    });
    const score = Math.round((correct / total) * 100);
    router.push(
      `/kuis/hasil?score=${score}&correct=${correct}&total=${total}&duration=${seconds}&title=${encodeURIComponent(dummyQuiz.title)}`,
    );
  }

  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        {/* Top bar (Sticky di bagian atas kuis) */}
        <div className="w-full bg-background border-b mb-6">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-xs text-muted-foreground">Kuis</p>
              <p className="font-bold text-sm">{dummyQuiz.title}</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold">
              <Clock size={15} />
              {formatTime(seconds)}
            </div>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Konten Utama */}
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              Soal {current + 1} dari {total}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {question.type === "true_false"
                ? "Benar / Salah"
                : "Pilihan Ganda"}
            </Badge>
          </div>

          <Card className="rounded-2xl shadow-sm w-full border-none bg-white p-2">
            <CardContent className="pt-6">
              <p className="text-base font-semibold leading-relaxed">
                {question.question}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 w-full">
            {question.options.map((opt) => {
              const selected = answers[question.id] === opt.label;
              return (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(opt.label)}
                  className={`flex items-center gap-4 w-full rounded-2xl px-5 py-4 text-left border-2 transition-all font-medium text-sm ${
                    selected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-white hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      selected
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {opt.label}
                  </span>
                  {opt.text}
                </button>
              );
            })}
          </div>

          {/* Navigasi */}
          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              className="flex-1 rounded-2xl gap-2"
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
            >
              <ChevronLeft size={16} /> Sebelumnya
            </Button>
            {current < total - 1 ? (
              <Button
                className="flex-1 rounded-2xl gap-2"
                onClick={() => setCurrent((c) => c + 1)}
              >
                Berikutnya <ChevronRight size={16} />
              </Button>
            ) : (
              <Button
                className="flex-1 rounded-2xl gap-2 bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={handleFinish}
                disabled={Object.keys(answers).length < total}
              >
                Selesai ✓
              </Button>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

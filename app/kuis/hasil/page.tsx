"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, Clock, Trophy, RotateCcw, Home } from "lucide-react"

function HasilContent() {
  const params = useSearchParams()
  const router = useRouter()

  const score = Number(params.get("score") ?? 0)
  const correct = Number(params.get("correct") ?? 0)
  const total = Number(params.get("total") ?? 0)
  const duration = Number(params.get("duration") ?? 0)
  const title = params.get("title") ?? "Kuis"

  const wrong = total - correct
  const minutes = Math.floor(duration / 60)
  const secs = duration % 60

  function getGrade() {
    if (score >= 90) return { label: "Sempurna! 🏆", color: "text-emerald-500" }
    if (score >= 75) return { label: "Bagus! ⭐", color: "text-blue-500" }
    if (score >= 60) return { label: "Cukup 👍", color: "text-amber-500" }
    return { label: "Perlu Latihan 💪", color: "text-rose-500" }
  }

  const grade = getGrade()

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="flex flex-col gap-6 w-full max-w-md">

        {/* Skor utama */}
        <Card className="rounded-2xl shadow-sm text-center">
          <CardContent className="pt-8 pb-8 flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-primary">{score}</span>
            </div>
            <p className={`text-xl font-extrabold ${grade.color}`}>{grade.label}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </CardContent>
        </Card>

        {/* Detail statistik */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="pt-4 pb-4 flex flex-col items-center gap-1">
              <CheckCircle2 className="text-emerald-500" size={22} />
              <p className="text-xl font-extrabold text-emerald-500">{correct}</p>
              <p className="text-[10px] text-muted-foreground">Benar</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="pt-4 pb-4 flex flex-col items-center gap-1">
              <XCircle className="text-rose-500" size={22} />
              <p className="text-xl font-extrabold text-rose-500">{wrong}</p>
              <p className="text-[10px] text-muted-foreground">Salah</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="pt-4 pb-4 flex flex-col items-center gap-1">
              <Clock className="text-blue-500" size={22} />
              <p className="text-xl font-extrabold text-blue-500">{minutes}:{secs.toString().padStart(2, "0")}</p>
              <p className="text-[10px] text-muted-foreground">Durasi</p>
            </CardContent>
          </Card>
        </div>

        {/* Poin didapat */}
        <Card className="rounded-2xl shadow-sm bg-amber-50 border-amber-200">
          <CardContent className="pt-4 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="text-amber-500" size={20} />
              <p className="font-bold text-sm">Poin didapat</p>
            </div>
            <p className="text-xl font-extrabold text-amber-500">+{score}</p>
          </CardContent>
        </Card>

        {/* Tombol aksi */}
        <div className="flex flex-col gap-3">
          <Button
            className="rounded-2xl h-12 font-bold gap-2"
            onClick={() => router.push("/kuis/1")}
          >
            <RotateCcw size={16} /> Ulangi Kuis
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl h-12 font-bold gap-2"
            onClick={() => router.push("/")}
          >
            <Home size={16} /> Kembali ke Beranda
          </Button>
        </div>

      </div>
    </div>
  )
}

export default function HasilPage() {
  return (
    <Suspense>
      <HasilContent />
    </Suspense>
  )
}
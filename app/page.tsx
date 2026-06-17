import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, BookOpen, Trophy, Flame, Star } from "lucide-react";
import Link from "next/link";

const days = ["S", "S", "R", "K", "J", "S", "M"];
const activeStreak = [0, 1, 2]; // index hari yang sudah aktif (contoh: 3 hari pertama)

const tabs = ["Pilihan Ganda", "Benar / Salah", "Isian Singkat"];

const subjects = [
  { id: "1", emoji: "💻", label: "Algoritma & Pemrograman" },
  { id: "2", emoji: "🗄️", label: "Basis Data" },
  { id: "3", emoji: "🌐", label: "Jaringan Komputer" },
  { id: "4", emoji: "🧮", label: "Matematika Diskrit" },
  { id: "5", emoji: "🔐", label: "Keamanan Sistem" },
  { id: "6", emoji: "📱", label: "Pemrograman Mobile" },
];

const stats = [
  {
    label: "Total Kuis",
    value: "24",
    icon: BookOpen,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    label: "Poin",
    value: "1.840",
    icon: Star,
    bg: "bg-amber-100",
    color: "text-amber-500",
  },
  {
    label: "Streak",
    value: "3 Hari",
    icon: Flame,
    bg: "bg-rose-100",
    color: "text-rose-500",
  },
  {
    label: "Peringkat",
    value: "#3",
    icon: Trophy,
    bg: "bg-emerald-100",
    color: "text-emerald-500",
  },
];

export default function Home() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto w-full">
            {/* Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-extrabold">
                  👋 Hai, <span className="text-primary">Fahri!</span>
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Mau latihan soal apa hari ini?
                </p>
              </div>
              <Button className="gap-2 rounded-full font-bold text-sm">
                <Upload size={15} /> Upload PDF
              </Button>
            </div>
            {/* Streak Bar */}
            <div className="rounded-2xl bg-primary p-5 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Flame size={20} className="text-amber-300" />
                <span className="font-bold text-lg">Day Streak</span>
              </div>
              <div className="flex justify-between">
                {days.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                        ${
                          activeStreak.includes(i)
                            ? "bg-amber-400 text-white shadow-md"
                            : "bg-white/20 text-white/50"
                        }`}
                    >
                      {activeStreak.includes(i) ? "🔥" : "💀"}
                    </div>
                    <span className="text-xs font-semibold">{day}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Tabs tipe soal */}
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                    ${
                      i === 0
                        ? "bg-primary text-white shadow"
                        : "bg-white border border-border text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Kategori Mata Kuliah */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {subjects.map((s) => (
                <Link
                  key={s.id}
                  href={`/kuis/${s.id}`}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
                      <span className="text-4xl">{s.emoji}</span>
                      <p className="text-sm font-semibold text-center">
                        {s.label}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

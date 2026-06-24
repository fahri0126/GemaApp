import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, BookOpen, Trophy, Flame, Star, LucideSwatchBook } from "lucide-react";
import Link from "next/link";

const days = ["S", "S", "R", "K", "J", "S", "M"];
const activeStreak = [0, 1, 2, 3]; // index hari yang sudah aktif (contoh: 3 hari pertama)

const tabs = ["Pilihan Ganda", "Benar / Salah", "Isian Singkat"];

const subjects = [
  {
    id: "1",
    emoji: <LucideSwatchBook size={50} className="text-blue-500" />,
    label: "Algoritma & Pemrograman",
  },
  { id: "2", emoji: <LucideSwatchBook size={50} className="text-green-500" />, label: "Basis Data" },
  {
    id: "3",
    emoji: <LucideSwatchBook size={50} className="text-purple-500" />,
    label: "Jaringan Komputer",
  },
  {
    id: "4",
    emoji: <LucideSwatchBook size={50} className="text-orange-500" />,
    label: "Matematika Diskrit",
  },
  {
    id: "5",
    emoji: <LucideSwatchBook size={50} className="text-red-500" />,
    label: "Keamanan Sistem",
  },
  {
    id: "6",
    emoji: <LucideSwatchBook size={50} className="text-indigo-500" />,
    label: "Pemrograman Mobile",
  },
];

export default function Home() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row items-end justify-between">
              <div className="text-left w-full mb-4 md:mb-0 lg:mb-0">
                <h1 className="text-2xl font-extrabold">
                  Selamat datang <span className="text-primary">Fahri!</span>
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Mau latihan soal apa hari ini?
                </p>
              </div>
              <Button className="gap-2 rounded-lg font-bold text-sm p-3">
                <Upload size={15} /> Upload PDF
              </Button>
            </div>
            {/* Streak Bar */}
            <div className="rounded-2xl bg-linear-to-b from-sky-400 to-blue-500 p-7 text-white">
              <div className="flex items-center justify-center gap-1 mb-7 lg:pr-7">
                <Flame size={50} className="text-amber-300 fill-orange-500" />
                <span className="font-bold text-xl">Day Streak</span>
              </div>
              <div className="flex justify-evenly">
                {days.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                        ${
                          activeStreak.includes(i)
                            ? "bg-amber-400 text-white shadow-md"
                            : "bg-white/20 text-white/50"
                        }`}
                    >
                      {activeStreak.includes(i) ? (
                        <Flame size={20} />
                      ) : (
                        <Flame size={20} />
                      )}
                    </div>
                    <span className="font-bold">{day}</span>
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

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

const riwayatData = [
  {
    id: 1,
    judul: "Algoritma & Pemrograman",
    tipe: "Pilihan Ganda",
    skor: 90,
    total: 10,
    benar: 9,
    tanggal: "17 Jun 2026",
    durasi: "8 menit",
  },
  {
    id: 2,
    judul: "Basis Data",
    tipe: "Benar / Salah",
    skor: 75,
    total: 8,
    benar: 6,
    tanggal: "16 Jun 2026",
    durasi: "5 menit",
  },
  {
    id: 3,
    judul: "Jaringan Komputer",
    tipe: "Isian Singkat",
    skor: 60,
    total: 10,
    benar: 6,
    tanggal: "15 Jun 2026",
    durasi: "12 menit",
  },
  {
    id: 4,
    judul: "Matematika Diskrit",
    tipe: "Pilihan Ganda",
    skor: 100,
    total: 10,
    benar: 10,
    tanggal: "14 Jun 2026",
    durasi: "7 menit",
  },
  {
    id: 5,
    judul: "Keamanan Sistem",
    tipe: "Pilihan Ganda",
    skor: 50,
    total: 10,
    benar: 5,
    tanggal: "13 Jun 2026",
    durasi: "10 menit",
  },
];

function skorColor(skor: number) {
  if (skor >= 80) return "text-emerald-500";
  if (skor >= 60) return "text-amber-500";
  return "text-rose-500";
}

function skorBadge(skor: number) {
  if (skor >= 80) return { label: "Bagus", variant: "default" as const };
  if (skor >= 60) return { label: "Cukup", variant: "secondary" as const };
  return { label: "Perlu Latihan", variant: "destructive" as const };
}

export default function RiwayatPage() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col gap-6 p-8 max-w-2xl mx-auto w-full md:max-w-none md:px-10">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-extrabold">📋 Riwayat Kuis</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Semua kuis yang pernah kamu kerjakan
              </p>
            </div>

            {/* Ringkasan */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="pt-4 pb-4">
                  <p className="text-2xl font-extrabold">
                    {riwayatData.length}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Kuis</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="pt-4 pb-4">
                  <p className="text-2xl font-extrabold text-emerald-500">
                    {Math.round(
                      riwayatData.reduce((a, b) => a + b.skor, 0) /
                        riwayatData.length,
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Rata-rata Skor
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="pt-4 pb-4">
                  <p className="text-2xl font-extrabold text-amber-500">
                    {riwayatData.filter((q) => q.skor === 100).length}
                  </p>
                  <p className="text-xs text-muted-foreground">Skor Sempurna</p>
                </CardContent>
              </Card>
            </div>

            {/* List Riwayat */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-bold">
                  Daftar Kuis
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {riwayatData.map((item) => {
                  const badge = skorBadge(item.skor);
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 gap-3"
                    >
                      {/* Icon skor */}
                      <div className="shrink-0">
                        {item.skor >= 60 ? (
                          <CheckCircle2
                            className="text-emerald-500"
                            size={22}
                          />
                        ) : (
                          <XCircle className="text-rose-500" size={22} />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">
                          {item.judul}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                          <Clock size={11} />
                          <span>{item.tanggal}</span>
                          <span>·</span>
                          <span>{item.durasi}</span>
                          <span>·</span>
                          <span>{item.tipe}</span>
                        </div>
                      </div>

                      {/* Skor */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <p
                          className={`text-lg font-extrabold ${skorColor(item.skor)}`}
                        >
                          {item.skor}
                        </p>
                        <Badge
                          variant={badge.variant}
                          className="text-[10px] px-2 py-0"
                        >
                          {badge.label}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

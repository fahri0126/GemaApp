import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Flame, Trophy, User2Icon } from "lucide-react";

const user = {
  name: "Muh. Fahri Fairuz Ramadhan",
  email: "fahri@example.com",
  prodi: "Teknik Informatika",
  universitas: "Universitas Halu Oleo",
  joinDate: "Januari 2026",
};

const stats = [
  {
    label: "Total Kuis",
    value: "24",
    icon: BookOpen,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    label: "Total Poin",
    value: "1.840",
    icon: Star,
    bg: "bg-amber-100",
    color: "text-amber-500",
    fill: "fill-amber-500",
  },
  {
    label: "Streak",
    value: "7 Hari",
    icon: Flame,
    bg: "bg-rose-100",
    color: "text-rose-500",
    fill: "fill-rose-500",
  },
  {
    label: "Peringkat",
    value: "#3",
    icon: Trophy,
    bg: "bg-emerald-100",
    color: "text-emerald-500",

  },
];

// Tombol logout perlu "use client" karena ada onClick
// Dipisah jadi komponen sendiri
import { LogoutButton } from "@/components/logout-button";

export default function ProfilPage() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col gap-6 p-8 max-w-2xl mx-auto w-full md:max-w-none md:px-10">
            <div className="flex items-center gap-4">
              <User2Icon className="size-8!" />
              <h1 className="text-2xl font-extrabold">Profil</h1>
            </div>

            <Card className="rounded-2xl shadow-sm lg:px-7 md:px-7">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center ring-2 ring-gray-300 ring-offset-2 text-3xl font-extrabold shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h2 className="text-lg font-extrabold truncate">
                      {user.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user.prodi} · {user.universitas}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Bergabung sejak {user.joinDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((s) => (
                <Card key={s.label} className="rounded-2xl shadow-sm">
                  <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${s.bg}`}
                    >
                      <s.icon size={18} className={`${s.color} ${s.fill}`} />
                    </div>
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="pt-5 pb-5 flex flex-col gap-4">
                <h3 className="font-bold text-sm">Informasi Akun</h3>
                {[
                  { label: "Nama Lengkap", value: user.name },
                  { label: "Email", value: user.email },
                  { label: "Program Studi", value: user.prodi },
                  { label: "Universitas", value: user.universitas },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="text-sm font-semibold text-right max-w-[60%] truncate">
                      {row.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Logout Component */}
            <LogoutButton />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

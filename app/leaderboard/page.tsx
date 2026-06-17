import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Flame, Star } from "lucide-react"

const leaderboardData = [
  { rank: 1, name: "Andi Pratama", points: 4200, streak: 14, quizzes: 38, badge: "🏆" },
  { rank: 2, name: "Siti Rahayu", points: 3850, streak: 10, quizzes: 32, badge: "🥈" },
  { rank: 3, name: "Fahri Fairuz", points: 3400, streak: 7, quizzes: 28, badge: "🥉" },
  { rank: 4, name: "Budi Santoso", points: 2900, streak: 5, quizzes: 24, badge: "⭐" },
  { rank: 5, name: "Dewi Lestari", points: 2750, streak: 4, quizzes: 21, badge: "⭐" },
  { rank: 6, name: "Rizky Aditya", points: 2500, streak: 3, quizzes: 19, badge: "⭐" },
  { rank: 7, name: "Nadia Putri", points: 2200, streak: 2, quizzes: 17, badge: "⭐" },
  { rank: 8, name: "Hendra Wijaya", points: 1950, streak: 1, quizzes: 14, badge: "⭐" },
  { rank: 9, name: "Fitri Handayani", points: 1700, streak: 0, quizzes: 12, badge: "⭐" },
  { rank: 10, name: "Yoga Pratama", points: 1500, streak: 0, quizzes: 10, badge: "⭐" },
]

const topThree = leaderboardData.slice(0, 3)
const rest = leaderboardData.slice(3)

const podiumOrder = [topThree[1], topThree[0], topThree[2]] // 2nd, 1st, 3rd
const podiumHeight = ["h-20", "h-28", "h-16"]
const podiumBg = ["bg-slate-300", "bg-amber-400", "bg-orange-300"]

// index user yang sedang login (dummy: Fahri = rank 3, index 2)
const currentUserRank = 3

export default function LeaderboardPage() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col gap-6 p-8 max-w-2xl mx-auto w-full md:max-w-none md:px-10">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-extrabold">🏆 Leaderboard</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Peringkat mahasiswa berdasarkan total poin
              </p>
            </div>

            {/* Podium Top 3 */}
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="pt-6 pb-4">
                <div className="flex items-end justify-center gap-4">
                  {podiumOrder.map((user, i) => (
                    <div
                      key={user.rank}
                      className="flex flex-col items-center gap-2"
                    >
                      {/* Avatar */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-extrabold
                        ${user.rank === currentUserRank ? "ring-4 ring-primary ring-offset-2" : ""}
                        bg-muted`}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <p className="text-xs font-bold text-center w-20 truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.points.toLocaleString()} poin
                      </p>
                      {/* Podium block */}
                      <div
                        className={`w-20 ${podiumHeight[i]} ${podiumBg[i]} rounded-t-xl flex items-center justify-center text-2xl font-black text-white`}
                      >
                        {user.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Posisi saya */}
            <div className="rounded-2xl bg-primary/10 border border-primary/30 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-primary font-extrabold text-lg">
                  #{currentUserRank}
                </span>
                <div>
                  <p className="font-bold text-sm">Fahri Fairuz</p>
                  <p className="text-xs text-muted-foreground">
                    Posisi kamu saat ini
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star size={14} /> 3.400
                </span>
                <span className="flex items-center gap-1 text-rose-500 font-bold">
                  <Flame size={14} /> 7 hari
                </span>
              </div>
            </div>

            {/* Tabel rank 4-10 */}
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-bold">
                  Peringkat Lainnya
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {rest.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors
                      ${
                        user.rank === currentUserRank
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-muted hover:bg-muted/70"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-bold w-6 text-sm">
                        #{user.rank}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <p className="font-semibold text-sm">{user.name}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star size={12} /> {user.points.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1 text-rose-500 font-bold">
                        <Flame size={12} /> {user.streak}h
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {user.quizzes} kuis
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
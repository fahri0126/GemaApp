"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, HistoryIcon, CrownIcon, User } from "lucide-react";

const navItems = [
  { label: "Beranda", url: "/", icon: Home },
  { label: "Leaderboard", url: "/leaderboard", icon: CrownIcon },
  { label: "Riwayat", url: "/riwayat", icon: HistoryIcon },
  { label: "Profil", url: "/profil", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-around h-20 border-t bg-background px-2 shadow-lg">
      {navItems.map((item) => {
        const isActive =
          item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);

        return (
          <Link
            key={item.label}
            href={item.url}
            className={`flex flex-col items-center gap-1 transition-colors
              ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <item.icon className="size-7" />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

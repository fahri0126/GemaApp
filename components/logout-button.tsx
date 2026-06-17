"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  function handleLogout() {
    // nanti diganti: signOut() dari NextAuth
    console.log("logout")
  }

  return (
    <Button
      onClick={handleLogout}
      variant="destructive"
      className="w-full rounded-2xl h-12 font-bold gap-2"
    >
      <LogOut size={18} />
      Keluar dari Akun
    </Button>
  )
}
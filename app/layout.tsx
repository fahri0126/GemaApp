import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { BottomNav } from "@/components/bottom-nav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-geist-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <TooltipProvider>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">

              <main className="flex-1 w-full overflow-hidden pb-20 md:pb-0">
                <div className="mx-auto w-full max-w-300 px-4 md:px-8 py-6">
                  {children}
                </div>
              </main>

              {/* Bottom Nav: Hanya muncul di mobile */}
              <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-white h-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <BottomNav />
              </nav>
              
            </div>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

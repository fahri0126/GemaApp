import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM streaks WHERE user_id = 1");
    const streak = (rows as any[])[0];
    return NextResponse.json(
      streak ?? { current_streak: 0, last_active_date: null },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal ambil data streak" },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Semua field harus diisi." },
      { status: 400 },
    );
  }

  // Cek email sudah terdaftar
  const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [
    email,
  ]);
  if ((existing as any[]).length > 0) {
    return NextResponse.json(
      { error: "Email sudah terdaftar." },
      { status: 409 },
    );
  }

  // Hash password
  const password_hash = await bcrypt.hash(password, 10);

  // Insert user baru
  await pool.query(
    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
    [name, email, password_hash],
  );

  return NextResponse.json(
    { message: "Registrasi berhasil." },
    { status: 201 },
  );
}

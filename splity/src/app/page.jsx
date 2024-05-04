"use client";
import { ThemeProvider } from "@/helper/theme-provider";
import Main from "./main/page";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col `}>
      <div className="relative w-full">
        <Main />
      </div>
    </main>
  );
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relam.ai - Location Intelligence",
  description: "AI-powered location intelligence for REITs, municipalities, and brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

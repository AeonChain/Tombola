import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";

export const metadata: Metadata = {
  title: "Tombeana",
  description: "For all your bean related needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center bg-slate-400">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "Регуляторная нагрузка - Аналитическая панель",
  description: "Анализ регуляторной нагрузки на бизнес в Республике Казахстан",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavBar />
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

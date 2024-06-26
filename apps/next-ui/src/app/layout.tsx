import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@ui/src/components/header";
import { Toaster } from "@ui/src/components/ui/toaster";
import { Separator } from "@ui/src/components/ui/separator";
import QueryProvider from "../components/query-provider";
import { AppProvider } from "../components/user-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FS",
  description: "Fastback: FS home assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <AppProvider>
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <Separator />
                <main className="w-full p-8 h-[calc(100vh-4rem)]">
                  {children}
                  <Toaster />
                </main>
              </div>
            </AppProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

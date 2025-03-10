import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Chronicles",
  description: "The archival website for the College of Information and Computer Studies Student Government (CICSSG)",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <html lang="en" data-theme="light" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-5 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center text-lg font-semibold">
                    <Image
                      src="/images/CICSSG.png"
                      width={40}
                      height={40}
                      alt="Picture of the author"

                    />
                    <Link href={"/"}>Chronicles</Link>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col flex-grow items-center gap-5 w-full max-w-7xl p-2">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-lg gap-8 py-4">
                <p>
                  Developed by {" "}
                  <a
                    href="https://www.facebook.com/DLSUD.CICSSG"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    CICSSG
                  </a>
                </p>
              </footer>
            </div>
          </main>
      </body>
    </html>
  ) : (
    <html lang="en" data-theme="light" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-row">
            <div className="flex-1 w-full flex flex-row gap-5 items-center">
              <nav className="h-full flex-col flex justify-center border-r border-r-foreground/10 bg-neutral">
                <div className="w-full max-w-5xl flex flex-col justify-between items-center p-3 px-5 text-sm h-full">
                  <div className="flex flex-col gap-5 items-center text-lg font-semibold">
                    <Image
                      src="/images/CICSSG.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"

                    />
                    <Link href={"/"}>Chronicles</Link>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col flex-grow items-center gap-5 w-full max-w-7xl p-2">
                {children}
              </div>
            </div>
          </main>
      </body>
    </html>
  )
}

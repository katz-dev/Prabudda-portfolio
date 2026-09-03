import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Prabudda Perera | Associate Software Support Engineer & Full-Stack Developer",
  description: "Senior developer portfolio of Prabudda Perera. Associate Software Support Engineer, Full-Stack Developer, Cybersecurity Enthusiast, and Game Developer with 6+ years of experience across enterprise HRIS, Next.js, NestJS, and FiveM infrastructure.",
  keywords: [
    "Prabudda Perera",
    "Full-Stack Developer",
    "Associate Software Support Engineer",
    "Cybersecurity",
    "FiveM Developer",
    "Next.js",
    "NestJS",
    "HRIS Systems",
    "ADMS Integration",
    "VFT Holdings",
    "Sri Lanka Developer"
  ],
  authors: [{ name: "Prabudda Perera", url: "https://www.linkedin.com/in/prabudda-perera" }],
  creator: "Prabudda Perera",
  openGraph: {
    title: "Prabudda Perera — Full-Stack Engineer & Software Support Specialist",
    description: "Building secure, scalable digital experiences through full-stack engineering, automation, and problem solving.",
    url: "https://github.com/katz-dev",
    siteName: "Prabudda Perera Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabudda Perera | Full-Stack & Systems Developer",
    description: "Building secure, scalable digital experiences through full-stack engineering, automation, and problem solving."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased selection:bg-[#06B6D4]/30 selection:text-[#06B6D4]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FallingIcons } from "@/components/FallingIcons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Subha Sri Maddela | DevOps & Cloud Engineer",
  description: "Portfolio of Subha Sri Maddela, a DevOps & Cloud Engineer specializing in CI/CD, Multi-Cloud, and Kubernetes.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD", "Subha Sri Maddela"],
  authors: [{ name: "Subha Sri Maddela" }],
  openGraph: {
    title: "Subha Sri Maddela | DevOps & Cloud Engineer",
    description: "Portfolio of Subha Sri Maddela, a DevOps & Cloud Engineer specializing in CI/CD, Multi-Cloud, and Kubernetes.",
    type: "website",
    locale: "en_US",
    siteName: "Subha Sri Maddela Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground transition-colors duration-300 font-sans`}>
        {/* Global Background */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_0%_100%,_#ffffff_0%,_#bfdbfe_40%,_#eff6ff_100%)] dark:bg-[radial-gradient(circle_at_0%_100%,_#60a5fa_0%,_#1e3a8a_30%,_#020617_70%)]"></div>
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

        <FallingIcons />

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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AuthorityOS - Build Trust",
  description: "We help clinic doctors become the trusted name patients think of first. Build your online reputation with AI-powered authority systems.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AuthorityOS - Build Trust",
    description: "We help clinic doctors become the trusted name patients think of first.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuthorityOS - Build Trust",
    description: "We help clinic doctors become the trusted name patients think of first.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

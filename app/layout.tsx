import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "StudentSphere - Academic Management System for All Levels",
  description: "Organize your entire academic life from Class 1 to PhD. Manage subjects, assignments, exams, attendance, and track progress with StudentSphere.",
  keywords: "student management, academic planning, assignment tracker, exam scheduler, study organization, educational technology",
  authors: [{ name: "StudentSphere" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studentsphere.com",
    title: "StudentSphere - Academic Management System",
    description: "Organize your entire academic life from Class 1 to PhD",
    siteName: "StudentSphere",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudentSphere - Academic Management System",
    description: "Organize your entire academic life from Class 1 to PhD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}

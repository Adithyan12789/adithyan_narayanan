import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Adithyan Narayanan is a Full Stack Developer in Kerala, India, building modern web applications, scalable backend systems, and intuitive digital experiences.";

export const metadata: Metadata = {
  title: "Adithyan Narayanan | Full-Stack Developer",
  description,
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Kerala, India"],
  openGraph: {
    type: "website",
    siteName: "Adithyan Narayanan — Portfolio",
    title: "Adithyan Narayanan | Full-Stack Developer",
    description,
    images: [
      {
        url: "https://itsme-orpin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-image.f0fed2d3.jpg&w=1200&q=85",
        width: 1200,
        height: 1824,
        alt: "Adithyan Narayanan, Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithyan Narayanan | Full-Stack Developer",
    description,
    images: [
      "https://itsme-orpin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-image.f0fed2d3.jpg&w=1200&q=85",
    ],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

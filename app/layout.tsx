import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/calibri-bold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/calibri-regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CALIBRATE",
  description: "CALIBRATE",
  openGraph: {
    type: "website",
    title: "",
    description: "",
    images: [
      {
        url: "/logo.png",
        width: 2500,
        height: 1041,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black `}
      >
        {children}
      </body>
    </html>
  );
}

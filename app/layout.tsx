import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { app } from "@/config/app";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: `%s | ${app.name}`,
  },
  description: app.description,
  icons: [
    {
      url: "/next.svg",
      href: "/next.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IMBPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}

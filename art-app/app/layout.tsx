import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Art Curation Engine",
  description: "Your Personal AI Art Curator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
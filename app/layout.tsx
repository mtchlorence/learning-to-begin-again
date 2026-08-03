import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning to Begin Again | Mitch Dela Piza",
  description:
    "A practical and personal field guide to focused and diffuse thinking, illusions of learning, and procrastination.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Pro Tools Second Brain",
  description: "Task-oriented Pro Tools workflow companion for audio engineers and students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}

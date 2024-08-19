import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { AppbarClient } from "../components/AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayTM Wallet",
  description: "Simple PayTM wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <AppbarClient />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-gray-800 text-white text-center py-4">
              © 2024 PayTM Wallet. All rights reserved.
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
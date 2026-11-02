import { QueryProvider } from "@/providers/query-providers";
import { ThemeProvider } from "@/theme/theme-provider";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Website",
  description: "Train Hard - Stay Strong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          const theme = localStorage.getItem("theme-mode");
          const variant = localStorage.getItem("theme-variant");

          if (theme) document.documentElement.classList.add(theme);
          if (variant) document.documentElement.classList.add("theme-" + variant);
        })();
      `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

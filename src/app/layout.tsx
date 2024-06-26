import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/footer";
import Script from "next/script";

const gibsonMedium = localFont({
  src: "./fonts/Gibson-Medium.otf",
  variable: "--font-gibson-medium",
});

const areaThin = localFont({
  src: "./fonts/Area-Thin.otf",
  variable: "--font-area-thin",
});

const areaLight = localFont({
  src: "./fonts/Area-Light.otf",
  variable: "--font-area-light",
});

const areaRegular = localFont({
  src: "./fonts/Area-Regular.otf",
  variable: "--font-area",
});

const areaMedium = localFont({
  src: "./fonts/Area-Medium.otf",
  variable: "--font-area-medium",
});

const areaSemiBold = localFont({
  src: "./fonts/Area-Semibold.otf",
  variable: "--font-area-semibold",
});

const areaBold = localFont({
  src: "./fonts/Area-Bold.otf",
  variable: "--font-area-bold",
});

const areaExtraBold = localFont({
  src: "./fonts/Area-Extrabold.otf",
  variable: "--font-area-extrabold",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          defer
          src="https://cdn.feedbucket.app/assets/feedbucket.js"
          data-feedbucket="eTRWsZavwweyAe0fW2y1"
        ></Script>
      </head>
      <body
        className={`${areaThin?.variable} ${areaLight?.variable} ${areaRegular?.variable} ${areaMedium?.variable} ${areaSemiBold?.variable} ${areaBold?.variable} ${areaExtraBold.variable} ${gibsonMedium.variable} font-area`}
      >
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

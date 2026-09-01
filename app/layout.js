import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const newRomantics = localFont({
  src: "./fonts/NewRomantics.ttf",
  variable: "--font-new-romantics",
  display: "swap",
});
const appleGaramond = localFont({
  src: [
    { path: "./fonts/AppleGaramond-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/AppleGaramond-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/AppleGaramond.ttf", weight: "400", style: "normal" },
    { path: "./fonts/AppleGaramond-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/AppleGaramond-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/AppleGaramond-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-apple-garamond",
  display: "swap",
});

export const metadata = {
  title: "Noor Majid",
  description: "Personal website for Noor Majid - est. 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newRomantics.variable} ${appleGaramond.variable} font-serif antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

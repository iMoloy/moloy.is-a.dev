import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import StarBackground from "@/components/StarBackground";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Moloy Krishna Paul — Full Stack Developer",
  description:
    "Moloy Krishna Paul is a full stack web developer specializing in MERN stack, building responsive and accessible digital experiences.",
  keywords: [
    "Moloy Krishna Paul",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Bangladesh",
    "Web Developer",
  ],
  authors: [{ name: "Moloy Krishna Paul", url: "https://moloy.is-a.dev" }],
  openGraph: {
    title: "Moloy Krishna Paul — Full Stack Developer",
    description:
      "Full stack web developer specializing in MERN stack — React, Node.js, Express, MongoDB.",
    url: "https://moloy.is-a.dev",
    siteName: "Moloy Krishna Paul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moloy Krishna Paul — Full Stack Developer",
    description:
      "Full stack web developer specializing in MERN stack.",
    creator: "@iMoloy",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/moloy-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans transition-colors duration-300`}>
        <ThemeProvider>
          <StarBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

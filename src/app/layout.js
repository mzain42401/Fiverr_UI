import { Inter } from "next/font/google";
import "./globals.css";
// import favicon from './image/favicon.png'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<link rel="icon" href="/favicon.ico" sizes="any" />

</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

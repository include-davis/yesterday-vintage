import { Inter, Fraunces } from "next/font/google";
import "./_globals/globals.scss";
import AdBar from "./_components/ad-bar/page.jsx";
import NavBar from './_components/nav-bar/page.jsx'; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--yv-font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--yv-font-display",
});

export const metadata = {
  title: "Yesterday Vintage",
  description: "Vintage Clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <AdBar/>
        <NavBar /> 
        {children}
      </body>
    </html>
  );
}

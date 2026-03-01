import { Inter, Fraunces } from "next/font/google";
import "./_globals/globals.scss";
import AdBar from "./_components/ad-bar/page.jsx";
import NavBar from "./_components/nav-bar/page.jsx"; 
import Footer from "./_components/footer/page.jsx"; 

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

// app/layout.jsx (or wherever RootLayout is)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <header className="siteHeader">
          <AdBar />
          <NavBar />
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import { Inclusive_Sans } from "next/font/google";
import "./_globals/globals.scss";
import AdBar from "./_components/ad-bar/page.jsx";
import NavBar from "./_components/nav-bar/page.jsx";
import Header from "./_components/header/page.jsx";
import Footer from "./_components/footer/page.jsx";

const alteHaasGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/alte_haas_grotesk/AlteHaasGroteskRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/alte_haas_grotesk/AlteHaasGroteskBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--yv-font-body",
});

// Display face for page titles and section headings. Replaces Newake, whose
// demo licence is personal-use only and so could not ship on a retail site.
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--yv-font-display",
});

export const metadata = {
  title: "Yesterday Vintage",
  description: "Vintage Clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alteHaasGrotesk.variable} ${inclusiveSans.variable}`}>
        <header className="siteHeader">
          <AdBar />
          <NavBar />
        </header>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./_globals/globals.scss";
import { CartProvider } from "./_context/CartContext";
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

const newake = localFont({
  src: "../public/fonts/newake/NewakeFont-Demo.otf",
  variable: "--yv-font-display",
});

export const metadata = {
  title: "Yesterday Vintage",
  description: "Vintage Clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alteHaasGrotesk.variable} ${newake.variable}`}>
        <CartProvider>
          <header className="siteHeader">
            <AdBar />
            <NavBar />
          </header>
          <Header />

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

import { Inter, Fraunces } from "next/font/google";
import "./_globals/globals.scss";

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
        {children}
      </body>
    </html>
  );
}

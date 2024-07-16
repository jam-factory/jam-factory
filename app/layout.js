import "modern-css-reset/dist/reset.min.css";
import "@/app/_styles/globals.scss";
import { Noto_Sans_JP, Figtree, IBM_Plex_Sans_JP } from "next/font/google";
import Header from "./_layouts/header/header";
import Footer from "./_layouts/footer/footer";
import { HamburgerMenuContextProvider } from "./_context/hamburger-menu-context";
import Wrapper from "./_layouts/wrapper/wrapper";
import HamburgerMenu from "./_components/common/hamburger-menu/hamburger-menu";
// import { ReCaptchaProvider } from "next-recaptcha-v3";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-ja",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-fig",
  display: "swap",
});

const ibm = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${figtree.variable} ${ibm.variable}`}>
        <HamburgerMenuContextProvider>
          <Wrapper>
            <Header />
            <HamburgerMenu />
            {children}
            <Footer />
          </Wrapper>
        </HamburgerMenuContextProvider>
      </body>
    </html>
  );
}

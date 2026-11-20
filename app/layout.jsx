import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./template/bootstrap.min.css";
import "./template/style.css";
import "./site.css";
import { Footer, SiteControls } from "./site-shell";

export const metadata = {
  title: { default: "VeraFide Technology Group", template: "%s | VeraFide Technology Group" },
  description: "Explore VeraFide Technology Group, our services, team, and blog.",
  icons: { icon: "/assets/verafide-logo-transparent.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top">
        <SiteControls />
        {children}
        <Footer />
      </body>
    </html>
  );
}



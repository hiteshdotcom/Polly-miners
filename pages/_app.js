import "../styles/globals.css";
import "../styles/global.scss";
import "../styles/sell.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "simple-notify/dist/simple-notify.min.css";

import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;

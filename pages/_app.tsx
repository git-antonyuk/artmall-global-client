import "../styles/globals.scss";
// import "../styles/ant/variables.less";
require("../styles/ant/variables.less");
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

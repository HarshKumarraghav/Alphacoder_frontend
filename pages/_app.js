import "../styles/globals.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
const progress = new ProgressBar({
  size: 4,
  color: "#008672",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

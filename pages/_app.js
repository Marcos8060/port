import Fab from "@/components/fab";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Fab />
      <Component {...pageProps} />
    </>
  );
}

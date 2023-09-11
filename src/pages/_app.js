import Navbar from "@/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}

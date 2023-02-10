import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "@/components";

import { StateContext } from "@/contex/StateContex";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
      <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

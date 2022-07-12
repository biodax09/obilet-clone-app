import Head from "next/head";
import AuthContextProvider from "@/context/AuthContext";
import { Header } from "@/components";

import "dayjs/locale/tr";
import "antd/dist/antd.min.css";
import "antd/lib/date-picker/style/index";
import "@/styles/globals.css";
import Journeys from "./journeys";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <AuthContextProvider>
        <Header />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;

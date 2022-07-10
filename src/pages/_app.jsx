import AuthContextProvider from "@/context/AuthContext";
import { Header, Footer } from "@/components";

import "dayjs/locale/tr";
import "antd/dist/antd.min.css";
import "antd/lib/date-picker/style/index";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default MyApp;

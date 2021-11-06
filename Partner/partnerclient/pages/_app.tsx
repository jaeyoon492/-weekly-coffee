import '../styles/globals.css'
import "../styles/bootstrap-custom.scss";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../provider";
import Layout from "../components/layout";
import Dashboard from "../components/material/Dashboard";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp

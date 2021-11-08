import '../styles/globals.css'
import "../styles/bootstrap-custom.scss";
import type { AppProps } from "next/app";

import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../provider";

import { useEffect } from "react";
import { requestFetchMember } from "../middleware/modules/member";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp

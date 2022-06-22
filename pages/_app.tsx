import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "./dashboard/dashboard.scss";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <SessionProvider session={session}>
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
        
      </SessionProvider>
  );
}

export default MyApp;
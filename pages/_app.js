import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navigation from "../components/Navigation";
import "../styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>DariushDev</title>
      </Head>
      <Navigation>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </Navigation>
    </>
  );
}

function Auth({ children }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;

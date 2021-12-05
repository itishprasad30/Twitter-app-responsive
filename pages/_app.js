import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;



// import { SessionProvider } from 'next-auth/react';

// const App = ({ Component, pageProps: { session, ...pageProps } }) => {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default App;


// // _app.tsx

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;

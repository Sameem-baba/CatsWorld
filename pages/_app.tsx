import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={"8e03e58bd47d918198dcfb69ce8457d6"}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

// kkCIVHr7cjwzhf7SNX9XLqO2grrbiw_66tAB6yaFl6_hQQF9X8L0npjY0HrFx5yCDlVRGiIUodjOouRGZNn2dQ;

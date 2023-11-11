/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>The Cat's World</title>
        <link rel="icon" href="/icon.webp" />
      </Head>
      <Header />
      <Banner />
    </main>
  );
}

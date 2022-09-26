import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/landing/Hero";
const Home = () => {
  return (
    <div className="w-screen h-screen bg-primary text-text font-main">
      <Head>
        <title>Alphacoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;

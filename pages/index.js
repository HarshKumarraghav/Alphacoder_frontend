import Head from "next/head";
import Subhero from "../components/landing/Subhero";
import Header from "../components/Header/Header";
import Hero from "../components/landing/Hero";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Head>
        <title>Alphacoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-screen h-screen bg-primary text-text font-main">
        <Hero />
      </div>
      <div className="bg-primary-light w-screen h-screen text-text font-main">
        <Subhero />
      </div>
      <Footer />
    </>
  );
};

export default Home;

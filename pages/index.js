import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../Assets/landing/hero.png";
const Home = () => {
  return (
    <div className="w-screen h-screen bg-primary text-text font-main">
      <Head>
        <title>Alphacoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full h-full flex justify-center items-center font-bold px-10">
        <div>
          <h1 className="text-[60px] text-center">
            Solve all your{" "}
            <span className="text-primary-color">DSA sheet </span> problem at
            one place.
          </h1>
          <div className="flex justify-center mt-10">
            <button className="w-40 text-center p-2 shadow-light-shadow bg-primary-color rounded-md">
              let's Begin
            </button>
          </div>
        </div>
        <div className="w-[1000px] h-[500px]">
          <Image src={Hero} objectFit="fill" />
        </div>
      </div>
    </div>
  );
};

export default Home;

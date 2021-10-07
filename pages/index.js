import Head from "next/head";
import Screen from "../components/Screen";

export default function Home() {
  return (
    <Screen>
      <Head>
        <title>OOOFER</title>
        <meta name="description" content="Embarace remote working." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
            <span className="font-light">OOO</span>FER
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-800">
            Embrace remote work.
          </p>
        </div>
      </main>
    </Screen>
  );
}

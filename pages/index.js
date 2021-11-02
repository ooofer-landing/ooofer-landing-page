import Head from 'next/head';

import SignUp from '../components/SignUp';
import LinedInIcon from '../components/LinedInIcon';

export default function Home() {
  return (
    <div className="h-screen relative">
      <Head>
        <title>OOOFER</title>
        <meta name="description" content="Embrace remote work." />
        <link rel="icon" href="/favicon.ico" />
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        )}
      </Head>

      <video
        className="object-cover h-screen w-screen absolute"
        autoPlay={true}
        loop={true}
        playsInline
        preload="auto"
        muted
        src="/background_video.mp4"
      >
        Video not supported
      </video>
      <div className="min-w-full min-h-full absolute bg-black z-10 opacity-70"></div>

      <div className="z-20 relative min-h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-logothin text-white sm:text-8xl">
            OOO<span className="font-logobold">FER</span>
          </h1>
          <p className="text-3xl sm:text-5xl text-white font-semibold">
            Embrace remote work.
          </p>
          <p className="text-white mt-4 mb-2">Follow us on</p>
          <LinedInIcon />
        </div>
      </div>
      <div className="z-20 absolute bottom-10 min-w-full">
        <div className="flex justify-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

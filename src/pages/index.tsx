/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Stenobot from "~/components/Stenobot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steno Booth</title>
        <meta name="description" content="Steno Booth" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="h-screen">
        <div className="flex items-center h-2/3 ">
          <video src="/video.mp4" className="h-full w-2/3 bg-white" autoPlay loop muted ></video>
          <div className="h-full w-1/3 flex flex-col items-center space-y-2 pt-4">
            <Stenobot />
            <img src="/qr.png" className=""></img>
          </div>
        </div>
        <img src="/banner.jpg" className="h-1/3 w-full"></img>
      </main>
    </>
  );
}

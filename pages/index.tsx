import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-5 grid-rows-1 h-screen border-4 border-yellow-500">
        <div
          id="left"
          className="col-span-2 col-start-1 row-span-1 border-4 border-red-500"
        >
          <h1 className="text-center">Klaudia Fecak</h1>
          <p className="text-center">UI/UX Designer</p>
          <p className="text-center">
            In design even the smallest iteration can change the outcome
          </p>
        </div>
        <div
          id="right"
          className="col-span-3 col-start-3 row-span-1 border-4 border-green-500"
        >
          <NavBar />
          <h1 className="text-center">Projects</h1>
          <div className="row-span-2 row-start-2 row-end-2 border-4 border-red-500"></div>
          <div
            id="project-boxes"
            className="grid grid-cols-2 grid-rows-2 gap-4 h-64 border-4 border-blue-500"
          >
            <div id="project-1" className="col-span-2  bg-orange-300"></div>
            <div id="project-2" className="col-start-1 bg-green-300"></div>
            <div id="project-3" className="col-start-2 bg-red-300"></div>
          </div>
        </div>
      </main>
    </>
  );
}

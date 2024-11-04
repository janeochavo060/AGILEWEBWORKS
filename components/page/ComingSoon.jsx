import Head from "next/head";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Agile Web Works</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen py-[50px] flex items-center justify-center text-[#333333] bg-gradient-to-r from-[#217BCE] to-[#2DA0B7]">
        <div className="container text-center px-4">
          <h1 className="font-bold text-[40px] md:text-[80px] text-white">
            Welcome to Agile Web Works.
          </h1>
          <p className="text-[20px] md:text-[50px] text-white opacity-75">
            New Website Coming Soon.
          </p>
          <div className="mt-8">
            <a
              href="mailto:info@agilewebworks.com"
              className="inline-block px-6 py-3 min-w-[150px] text-lg font-semibold rounded-[5px] text-white bg-gradient-to-r from-[#F36D26] to-[#E38219]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

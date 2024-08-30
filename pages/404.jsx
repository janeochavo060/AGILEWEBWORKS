import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="container py-[50px]">
        <div className="flex items-center min-h-[500px]">
          <Image src={`/images/404.webp`} alt="404" width={560} height={560} />
          <div className="p-[50px]">
            <h1 className="text-[150px] font-bold">404</h1>
            <p className="font-bold text-[30px]">{`Something's missing.`}</p>
            <p className="text-[20px] mt-[5px]">{`This page is missing or moved to another url.`}</p>
            <Link href="/" className="inline-block mt-[50px]">
              Go back to home{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px] inline-block ml-[5px] align-middle"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

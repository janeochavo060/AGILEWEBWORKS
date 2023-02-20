import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import Contact from "@/components/partials/Contact";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function BottomComponent () {
  const router = useRouter();
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(false)
    const timer = setTimeout(() => {
      setLoad(true)
      clearTimeout(timer)
    }, 1000)
  }, [router])
  return (
    <>
      {load && (
        <>
          <SliceBackground>
            <Contact />
          </SliceBackground>
          <Footer />
        </>
      )}
    </>
  );
}
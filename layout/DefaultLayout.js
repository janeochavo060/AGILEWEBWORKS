import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import Contact from "@/components/partials/Contact";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const DefaultLayout = (props) => {
  const router = useRouter();
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(false)
    const timer = setTimeout(() => {
      setLoad(true)
      clearTimeout(timer)
    }, 2000)
  }, [router?.asPath, router?.isReady])
  return (
    <>
      <Menu />
      {props.children}
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
};

export default DefaultLayout;

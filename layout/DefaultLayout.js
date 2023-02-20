import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";
import SliceBackground from "@/components/partials/SliceBackground";
import Contact from "@/components/partials/Contact";
import { useState } from "react";
const DefaultLayout = (props) => {
  const [test, setTest] = useState(false)

  setTimeout(() => {
    setTest(true)
  }, 1000)

  return (
    <>
      <Menu />
      {props.children}
      {test && (
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

import ReCAPTCHA from "react-google-recaptcha";
import globalState from "@/lib/store/globalState";
import { useEffect, useRef } from "react";
export default function GoogleRecaptchaV2({ setToken, sitekey }) {
  const showLazy = globalState((state) => state.showLazy);
  const captcha = useRef("");
  useEffect(() => {
    globalState.setState({ captcha });
  }, []);
  return (
    <>
      {showLazy && (
        <ReCAPTCHA
          ref={captcha}
          sitekey={sitekey}
          onChange={(token) => setToken(token)}
        />
      )}
    </>
  );
}

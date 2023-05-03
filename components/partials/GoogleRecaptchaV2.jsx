import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export default function GoogleRecaptchaV2({ setToken }) {
  useEffect(() => {
    const handleScroll = () => {
      setShowForm(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOGGLE_CAPTCHA_SITE_KEY}
          onChange={(token) => setToken(token)}
        />
      )}
    </>
  );
}

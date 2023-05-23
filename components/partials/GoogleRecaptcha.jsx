import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export default function GoogleRecaptchaV2({ setToken, sitekey }) {
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
        <ReCAPTCHA sitekey={sitekey} onChange={(token) => setToken(token)} />
      )}
    </>
  );
}

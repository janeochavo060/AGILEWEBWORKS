import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";
export default function CloudFlareRecaptcha({ setToken, sitekey }) {
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
        <Turnstile siteKey={sitekey} onSuccess={(token) => setToken(token)} />
      )}
    </>
  );
}

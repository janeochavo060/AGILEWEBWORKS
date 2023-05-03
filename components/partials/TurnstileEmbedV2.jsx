import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";
export default function TurnstileEmbedV2({ setToken }) {
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
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_KEY}
          onSuccess={(token) => setToken(token)}
        />
      )}
    </>
  );
}

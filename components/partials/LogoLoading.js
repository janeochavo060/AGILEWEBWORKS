import Image from "next/image";
import React from "react";

export default function LogoLoading() {
  return (
    <Image
      src="/images/logo.png"
      alt="Halcyon Logo"
      className="animate-pulse p-8"
      width={200}
      height={24}
    />
  );
}

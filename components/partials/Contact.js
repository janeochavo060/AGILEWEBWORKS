import FORMAPI from "@/lib/api/forms/request";
import React from "react";

export default function Contact() {
  FORMAPI.findFormsSwr("contact");
  return <div>Contact</div>;
}

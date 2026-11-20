"use client";

import { useState } from "react";

export function ContactForm({ children }) {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const [notice, setNotice] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!email) return;
    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(fields.get("subject"));
    const body = encodeURIComponent(
      `Name: ${fields.get("name")}\nEmail: ${fields.get("email")}\nPhone: ${fields.get("mobile")}\n\n${fields.get("message")}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setNotice("Your email app can now open the draft for you to review and send.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      {children}
      <button type="submit" className="btn btn-primary py-3 w-100" disabled={!email}>Open Email Draft</button>
      <p className="mt-3 mb-0" role="status">{notice || (!email && "Contact email will be available once configured.")}</p>
    </form>
  );
}

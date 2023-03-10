import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import contact from "../../styles/components/Contact.module.scss";

export default function Form() {
  const captchaRef = useRef();
  const firstNameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const subject = subjectRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const token = await captchaRef.current.executeAsync();

    const body = { firstName, subject, email, message, token };

    setLoading(true);

    const request = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (request) {
      const response = await request.json();
      setStatus(response.message);
      setLoading(false);
    }
  };

  return (
    <div className={contact.contactForm}>
      {status ? <div>{status}</div> : null}
      {!status && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="First Name"
            ref={firstNameRef}
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            ref={emailRef}
            required
          ></input>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            ref={subjectRef}
            required
          ></input>
          <textarea
            id="message"
            placeholder="Your Message"
            ref={messageRef}
            required
          ></textarea>
          <div className="captcha">
            <ReCAPTCHA
              sitekey="RECAPTCHA_SITE_KEY_HERE"
              size="invisible"
              ref={captchaRef}
            />
          </div>
          {loading ? null : <button className="button">Send</button>}
        </form>
      )}
    </div>
  );
}

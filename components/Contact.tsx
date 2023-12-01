"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import emailjs from "@emailjs/browser";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";

const Contact = () => {
  const form: any = useRef();
  const [status, setStatus] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcjv7fe",
        "template_lm37ztw",
        form.current,
        "0qEytRhXqOf0cpUUe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact" className="flex flex-col items-center">
      <TextAnimation className="flex justify-center">
        <h2 className="font-bold text-5xl text-primary mb-20">Contact Me</h2>
      </TextAnimation>
      <form
        className="flex flex-col items-start lg:w-2/5 text-lg"
        ref={form}
        onSubmit={sendEmail}
      >
        <TextAnimation className="w-full mb-10">
          <p>
            {
              "Do you have any question? Feel free to fill in this form or contact me in "
            }
            <u className="text-primary font-semibold no-underline">
              jordirocasoler94@gmail.com
            </u>
          </p>
        </TextAnimation>
        <SimpleAnimation className="w-full">
          <div className="flex flex-col sm:w-1/2 ">
            <label className="font-semibold mb-2">Name</label>
            <input
              className="rounded border border-gray/50 py-2 pl-2"
              type="text"
              name="user_name"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label className="font-semibold mt-6 mb-2">Email</label>
            <input
              className="rounded border border-gray/50 py-2 pl-2"
              type="email"
              name="user_email"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold mt-6 mb-2">Message</label>
            <textarea
              className="rounded border border-gray/50 py-2 pl-2"
              name="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="mt-10 border-black hover:bg-primary hover:text-white hover:border-none py-2 px-10 rounded-lg text-lg border cursor-pointer transition-all duration-400 ease-in"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </SimpleAnimation>

        {status === true && (
          <p className="mt-4 text-primary">
            Your message was sent successfully
          </p>
        )}
      </form>
    </Container>
  );
};

export default Contact;
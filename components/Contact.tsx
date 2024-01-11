"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import emailjs from "@emailjs/browser";
import TextAnimation from "./animations/TextAnimation";
import SimpleAnimation from "./animations/SimpleAnimation";
import useColor from "@/hooks/useColor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./Loader";
import { z } from "zod";

const userinfoSchema = z.object({
  email: z.string().email({ message: "An email is required." }),
  name: z.string().min(1, { message: "A name is required" }),
  message: z.string().min(1, { message: "A message is required" }),
});

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const ref = useColor<HTMLDivElement>();
  const form: any = useRef();
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(userinfoSchema),
  });

  const sendEmail = (e: any) => {
    setLoading(true);
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
          setLoading(false);
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    setTimeout(() => {
      setStatus(false);
    }, 5000);
  };

  return (
    <Container
      ref={ref}
      id="contact"
      className="bg-white flex flex-col items-center"
    >
      <TextAnimation className="flex justify-center">
        <h2 className="font-bold text-5xl text-primary mb-20">Contact Me</h2>
      </TextAnimation>
      <form
        className="flex flex-col items-start lg:w-2/5 text-lg"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
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
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              className="rounded border border-gray/50 py-2 pl-2"
              type="text"
              placeholder="Full name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p aria-describedby="name" className="text-red pt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mt-6 mb-2">
              Email
            </label>
            <input
              id="email"
              className="rounded border border-gray/50 py-2 pl-2"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p aria-describedby="email" className="text-red pt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="font-medium mt-6 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="rounded border border-gray/50 py-2 pl-2"
              placeholder="Message"
              {...register("message")}
            />
            {errors.message?.message && (
              <p aria-describedby="message" className="text-red pt-1">
                {errors.message?.message}
              </p>
            )}
          </div>
          <button
            className="w-full md:w-auto mt-10 border-gray/50 hover:bg-primary hover:text-white hover:border-none py-2 px-10 rounded-lg text-lg border cursor-pointer transition-all duration-400 ease-in"
            type="submit"
            value="Send"
          >
            {loading ? <Loader /> : <div>Send</div>}
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

"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xrbazwzb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Got a project in mind? Fill out the form and we’ll get back to you.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-600">
            ✅ Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">
            ❌ Oops! Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
}

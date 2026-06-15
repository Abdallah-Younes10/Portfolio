import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
emailjs.init("U4Sm7c-NEnyuAIs1A");

export const Form = () => {

  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (!currentForm) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_i639bfc",
        "template_7ihlwoa",
        currentForm,
        "U4Sm7c-NEnyuAIs1A"
      )
      .then(() => {
        alert("Message sent successfully!");
        currentForm.reset();
      })
      .catch((error) => {
        console.log("ERROR:", error);
        console.log("STATUS:", error.status);
        console.log("TEXT:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-xl mx-auto flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-slate-300 text-sm">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-600/30 text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-300 text-sm">Email</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-600/30 text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-slate-300 text-sm">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="What's this about?"
          required
          className="px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-600/30 text-white focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-slate-300 text-sm">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          className="px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-600/30 text-white focus:border-cyan-400 focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 active:scale-95 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
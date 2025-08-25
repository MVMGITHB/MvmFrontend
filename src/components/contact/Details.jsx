"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Details() {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert(
        "Please agree to the Privacy Policy and Terms of Use before submitting."
      );
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        e.target.reset();
        setAgreed(false);
        router.push("/thankyou"); // ✅ redirect after success
      } else {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }

    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="8d887b6d-94e3-48cf-9455-a85001f477b7"
      />

      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="Name"
          required
          className="w-full p-3 bg-[#0a0a0c] text-white border border-gray-700 rounded"
        />
      </div>

      <div>
        <label htmlFor="company" className="block mb-2 text-sm font-medium">
          Company Name
        </label>
        <input
          name="company"
          type="text"
          id="company"
          placeholder="Company Name"
          className="w-full p-3 bg-[#0a0a0c] text-white border border-gray-700 rounded"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-[#0a0a0c] text-white border border-gray-700 rounded"
          />
        </div>

        <div className="w-full md:w-1/2">
          <label htmlFor="number" className="block mb-2 text-sm font-medium">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            id="number"
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-[#0a0a0c] text-white border border-gray-700 rounded"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Type your message"
          className="w-full p-3 bg-[#0a0a0c] text-white border border-gray-700 rounded resize-none"
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mt-1 mr-2"
        />
        <label htmlFor="checkbox" className="text-sm text-gray-400">
          By submitting the form, I agree to the{" "}
          <Link href="/privacy-policy">
            <span className="font-bold text-white underline">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-use">
            <span className="font-bold text-white underline">Terms of Use</span>
          </Link>{" "}
          to receive information from MVM BUSINESS SERVICES.
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreed || loading}
        className={`w-full py-3 text-black font-medium rounded transition ${
          agreed
            ? "bg-white hover:bg-gray-300"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default Details;

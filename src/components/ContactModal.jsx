import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Developer 1: Armaan Siddiqui
const SERVICE_ID_DEV1 = "service_1edegav";
const TEMPLATE_ID_DEV1 = "template_fw2hkof";
const PUBLIC_KEY_DEV1 = "LyW5g131JXjvsjGOE";

// Developer 2: Somya Kaushik
const SERVICE_ID_DEV2 = "service_gue1dpg";
const TEMPLATE_ID_DEV2 = "template_n0cpryj";
const PUBLIC_KEY_DEV2 = "PL9KuRCRq8WuDE7vc";

export default function ContactModal({ onClose }) {
  const formRef = useRef();
  const [recipient, setRecipient] = useState("both");

  const sendFormTo = async (serviceId, templateId, publicKey) => {
    const timeField = formRef.current.querySelector('input[name="time"]');
    timeField.value = new Date().toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "short",
    });

    return emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (recipient === "dev1") {
        await sendFormTo(SERVICE_ID_DEV1, TEMPLATE_ID_DEV1, PUBLIC_KEY_DEV1);
        alert("✅ Message sent to Armaan Siddiqui!");
      } else if (recipient === "dev2") {
        await sendFormTo(SERVICE_ID_DEV2, TEMPLATE_ID_DEV2, PUBLIC_KEY_DEV2);
        alert("✅ Message sent to Somya Kaushik!");
      } else {
        await sendFormTo(SERVICE_ID_DEV1, TEMPLATE_ID_DEV1, PUBLIC_KEY_DEV1);
        await sendFormTo(SERVICE_ID_DEV2, TEMPLATE_ID_DEV2, PUBLIC_KEY_DEV2);
        alert("✅ Message sent to both developers!");
      }

      formRef.current.reset();
      onClose();
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black w-full max-w-md rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-xl font-semibold text-center mb-4">
          📬 Contact Developers
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <input type="hidden" name="time" />

          <select
            className="w-full p-3 rounded-lg border border-gray-300"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option value="both">📧 Both Developers</option>
            <option value="dev1">👨‍💻 Armaan Siddiqui</option>
            <option value="dev2">🎨 Somya Kaushik</option>
          </select>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:brightness-110"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

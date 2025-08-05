"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get my AI voice agent up and running?",
    answer:
      "Most restaurants are live within 30 minutes. Simply provide your menu, hours, and policies, write basic instructions, and you&apos;re ready to go. No technical expertise required.",
  },
  {
    question:
      "Will the AI understand my restaurant&apos;s specific menu and policies?",
    answer:
      "Absolutely. The AI is trained on your exact menu, ingredients, pricing, and policies. It can handle special requests, dietary restrictions, and even recommend dishes based on preferences.",
  },
  {
    question: "Can it handle multiple languages?",
    answer:
      "Yes! Our AI supports over 30 languages with native-level fluency. It automatically detects the caller&apos;s language and responds accordingly, perfect for diverse communities.",
  },
  {
    question: "What happens during peak hours with multiple calls?",
    answer:
      "The AI can handle unlimited concurrent calls without any wait times. Whether it&apos;s 1 call or 100 calls at once, every customer gets immediate attention.",
  },
  {
    question: "How does it integrate with my existing POS system?",
    answer:
      "We integrate with all major restaurant POS systems including Square, Toast, Clover, and more. Orders and reservations sync automatically in real-time.",
  },
  {
    question: "What if I need to update menu items or hours?",
    answer:
      "Updates are instant and easy. Change your menu or hours anytime through our simple dashboard, and the AI immediately knows the new information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AI voice agents for restaurants
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/intake"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Talk to our restaurant success team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

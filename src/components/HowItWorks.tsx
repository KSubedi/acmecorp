"use client";

import { motion } from "framer-motion";
import { FileText, Cog, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Simple Instructions",
    description:
      "Train your AI agent like you would a new employee - just write instructions in plain English.",
  },
  {
    icon: Cog,
    number: "2",
    title: "Add Your Knowledge",
    description:
      "Upload your menu, hours, policies, and FAQs. The AI automatically learns your restaurant&apos;s details.",
  },
  {
    icon: TestTube,
    number: "3",
    title: "Test & Refine",
    description:
      "Make test calls to ensure perfect responses. Fine-tune until it matches your standards.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Go Live Instantly",
    description:
      "Deploy across phone, web chat, and messaging platforms. Start handling customers immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From Zero to AI Agent in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No coding required. Launch your restaurant&apos;s AI voice agent
              in minutes, not months.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -z-10" />
              )}

              <div className="text-center">
                <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-blue-600">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your restaurant&apos;s phone experience?
          </p>
          <a
            href="/intake"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

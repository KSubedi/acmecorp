"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  MessageSquare,
  Brain,
  Globe,
  Zap,
  Clock,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Intelligent Call Handling",
    description:
      "Handle unlimited concurrent calls with natural, conversational AI that understands context and intent.",
  },
  {
    icon: Calendar,
    title: "Smart Reservation Management",
    description:
      "Automatically book, modify, and cancel reservations while syncing with your existing systems.",
  },
  {
    icon: MessageSquare,
    title: "Order Taking Excellence",
    description:
      "Accurately capture phone orders with menu knowledge and special request handling.",
  },
  {
    icon: Brain,
    title: "Menu & Hours Expertise",
    description:
      "AI trained on your specific menu, hours, and policies to answer any customer question.",
  },
  {
    icon: Globe,
    title: "30+ Language Support",
    description:
      "Serve diverse communities with native-level fluency in multiple languages.",
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description:
      "Lightning-fast responses that feel natural and keep conversations flowing smoothly.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Never miss a call again - your AI agent works around the clock, even on holidays.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track call metrics, customer sentiment, and conversion rates with detailed insights.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance to protect your customer data.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Restaurant Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed to enhance your restaurant&apos;s customer
              experience and operational efficiency
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

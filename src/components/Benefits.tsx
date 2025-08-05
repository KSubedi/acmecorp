"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Star,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Labor Costs",
    description:
      "Save thousands monthly by automating phone tasks while your staff focuses on in-house guests.",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    icon: Users,
    title: "Never Miss a Customer",
    description:
      "Capture every call, even during rush hours. Convert more inquiries into actual reservations.",
    stat: "100%",
    statLabel: "Call Answer Rate",
  },
  {
    icon: Clock,
    title: "Save Staff Time",
    description:
      "Free up 20+ hours weekly from phone duties. Let your team focus on hospitality, not phone calls.",
    stat: "20+",
    statLabel: "Hours Saved Weekly",
  },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description:
      "Increase bookings and orders with 24/7 availability. Never lose business to a missed call again.",
    stat: "5X",
    statLabel: "More Bookings",
  },
  {
    icon: Star,
    title: "Improve Reviews",
    description:
      "Consistent, professional phone service leads to happier customers and better online ratings.",
    stat: "4.8★",
    statLabel: "Average Rating",
  },
  {
    icon: HeartHandshake,
    title: "Enhanced Customer Experience",
    description:
      "Provide instant, accurate answers in multiple languages. Delight customers with seamless service.",
    stat: "95%",
    statLabel: "Satisfaction Rate",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Restaurant&apos;s Bottom Line
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of restaurants seeing real, measurable results with
              AI voice automation
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            ROI Calculator: See Your Potential Savings
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Most restaurants save $3,000+ monthly with our AI voice agents
          </p>
          <a
            href="/intake"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Calculate Your Savings
          </a>
        </motion.div>
      </div>
    </section>
  );
}

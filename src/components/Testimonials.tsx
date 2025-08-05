"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Owner, La Casa Restaurant",
    content:
      "We&apos;ve seen a 5X increase in reservations since implementing Acme Corp&apos;s AI voice agent. It handles our bilingual customers perfectly and never misses a call.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
  {
    name: "James Chen",
    role: "Manager, Golden Dragon",
    content:
      "Our phone used to ring off the hook during dinner rush. Now the AI handles everything seamlessly. Staff morale is up, and we&apos;re taking 40% more orders.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
  {
    name: "Sarah Thompson",
    role: "Owner, The Burger Joint",
    content:
      "Setting up was incredibly easy - just like training a new employee. The AI knows our entire menu and handles special requests better than most humans would.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how restaurants like yours are transforming their operations
              with AI
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-2">Join over</p>
          <p className="text-4xl font-bold text-blue-600 mb-2">
            1,000+ Restaurants
          </p>
          <p className="text-lg text-gray-600">
            already using Acme Corp AI Voice Agents
          </p>
        </motion.div>
      </div>
    </section>
  );
}

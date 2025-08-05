"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Clock, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Voice Agent for
              <span className="text-blue-600 block">Restaurant Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Never miss another reservation. Automate phone orders, bookings,
              and customer inquiries with intelligent AI that understands your
              restaurant&apos;s unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/intake"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </Link>
            <Link
              href="#demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-medium text-lg border-2 border-blue-600"
            >
              Watch Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Call Coverage</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5X</div>
              <div className="text-gray-600">More Bookings</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Restaurants</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

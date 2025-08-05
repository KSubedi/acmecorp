"use client";

import { motion } from "framer-motion";
import { Plug, Webhook, Database, Smartphone } from "lucide-react";

const integrations = [
  "Square",
  "Toast",
  "Clover",
  "OpenTable",
  "Resy",
  "Yelp Reservations",
  "DoorDash",
  "Uber Eats",
  "Grubhub",
  "Google Business",
  "Facebook",
  "Instagram",
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamlessly Integrates With Your Tech Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing POS, reservation systems, and delivery
              platforms
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">POS Systems</h3>
            <p className="text-gray-600 text-sm">
              Direct integration with major restaurant POS platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plug className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Reservation Platforms
            </h3>
            <p className="text-gray-600 text-sm">
              Sync with OpenTable, Resy, and other booking systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Apps</h3>
            <p className="text-gray-600 text-sm">
              Compatible with all major food delivery platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Webhook className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Custom APIs</h3>
            <p className="text-gray-600 text-sm">
              Webhooks and APIs for custom integrations
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Works With Your Favorite Restaurant Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded-lg text-center text-gray-700 font-medium shadow-sm"
              >
                {integration}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            + 1000s more through Zapier and webhooks
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant&apos;s Phone Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of restaurants already using AI to delight customers
            and boost revenue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/intake"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="bg-transparent text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-medium text-lg border-2 border-white"
            >
              Schedule a Demo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-white">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free trial available</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

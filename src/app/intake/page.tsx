"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactName: "",
    email: "",
    phone: "",
    restaurantType: "",
    numberOfLocations: "",
    currentChallenges: "",
    monthlyCallVolume: "",
    posSystem: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md"
        >
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We&apos;ve received your information and will contact you within 24
            hours to discuss how Acme Corp can transform your restaurant&apos;s
            phone experience.
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Get Started with Acme Corp
          </h1>
          <p className="text-gray-600 mb-8">
            Tell us about your restaurant and we&apos;ll show you how AI voice
            agents can transform your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="restaurantName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="restaurantType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Restaurant Type *
                </label>
                <select
                  id="restaurantType"
                  name="restaurantType"
                  required
                  value={formData.restaurantType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="fine-dining">Fine Dining</option>
                  <option value="casual-dining">Casual Dining</option>
                  <option value="fast-casual">Fast Casual</option>
                  <option value="quick-service">Quick Service</option>
                  <option value="cafe">Cafe/Coffee Shop</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfLocations"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Number of Locations *
                </label>
                <select
                  id="numberOfLocations"
                  name="numberOfLocations"
                  required
                  value={formData.numberOfLocations}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="1">1 Location</option>
                  <option value="2-5">2-5 Locations</option>
                  <option value="6-10">6-10 Locations</option>
                  <option value="11-50">11-50 Locations</option>
                  <option value="50+">50+ Locations</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="monthlyCallVolume"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Estimated Monthly Call Volume
              </label>
              <select
                id="monthlyCallVolume"
                name="monthlyCallVolume"
                value={formData.monthlyCallVolume}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select range</option>
                <option value="<500">Less than 500</option>
                <option value="500-1000">500 - 1,000</option>
                <option value="1000-5000">1,000 - 5,000</option>
                <option value="5000+">5,000+</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="posSystem"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current POS System
              </label>
              <input
                type="text"
                id="posSystem"
                name="posSystem"
                value={formData.posSystem}
                onChange={handleChange}
                placeholder="e.g., Square, Toast, Clover..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="currentChallenges"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                What phone-related challenges are you facing?
              </label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                rows={4}
                value={formData.currentChallenges}
                onChange={handleChange}
                placeholder="e.g., Missed calls during rush hours, language barriers, staff spending too much time on phone..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                When are you looking to implement a solution? *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="immediately">Immediately</option>
                <option value="1-2-weeks">1-2 weeks</option>
                <option value="1-month">Within a month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="just-researching">Just researching</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Get Started Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

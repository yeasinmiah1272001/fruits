import React from "react";
import { FaLeaf, FaShippingFast, FaClock } from "react-icons/fa";

const Services = () => {
  return (
    <div className="mt-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-center text-4xl text-green-600 font-bold mb-12">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#EFEBE3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center h-64">
          <div className="flex justify-center mb-6">
            <FaClock className="text-green-500 text-6xl" />
          </div>
          <h2 className="text-xl font-semibold mb-4">24/7 Services</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are available round the clock to assist you with our services,
            ensuring maximum convenience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#EFEBE3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center h-64">
          <div className="flex justify-center mb-6">
            <FaShippingFast className="text-red-500 text-6xl" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Fast Delivery</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Experience swift and reliable delivery services with our efficient
            team.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#EFEBE3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center h-64">
          <div className="flex justify-center mb-6">
            <FaLeaf className="text-green-500 text-6xl" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Healthy Products</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We prioritize health by offering organic and eco-friendly products
            for you and your family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

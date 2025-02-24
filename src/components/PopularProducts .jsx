import React from "react";
import img1 from "../assets/download (3).png";

const products = [
  { id: 1, name: "Onion 1 KG", price: "$39.99", rating: 4.5, image: "🧅" },
  { id: 2, name: "Tomato 500 g", price: "$39.99", rating: 4.5, image: "🍅" },
  { id: 3, name: "Potato 1 KG", price: "$39.99", rating: 4.5, image: "🥔" },
  { id: 4, name: "Tomato 500 g", price: "$39.99", rating: 4.5, image: "🍅" },
  { id: 5, name: "Onion 1 KG", price: "$39.99", rating: 4.5, image: "🧅" },
  { id: 6, name: "Potato 1 KG", price: "$39.99", rating: 4.5, image: "🥔" },
  { id: 7, name: "Onion 1 KG", price: "$39.99", rating: 4.5, image: "🧅" },
  { id: 8, name: "Tomato 500 g", price: "$39.99", rating: 4.5, image: "🍅" },
  { id: 9, name: "Potato 1 KG", price: "$39.99", rating: 4.5, image: "🥔" },
];

const PopularProducts = () => {
  return (
    <div className=" bg-[#EFEBE3] mt-8 ">
      <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-16">
        <div className="p-6 bg-green-600 rounded-lg shadow-lg text-white flex flex-col justify-between">
          <div>
            <h3 className="text-5xl font-bold mb-4">30% off</h3>
            <p className="text-lg mb-6">
              Discover a world of treats, toys, and essentials handpicked for
              you!
            </p>
            <img src={img1} alt="Special Offer" className="rounded-lg  h-72" />
          </div>
          <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow-md hover:bg-gray-100 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{product.image}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-lg text-green-600 font-bold mb-2">
                {product.price}
              </p>
              <div className="flex items-center text-yellow-500">
                <span className="mr-1 text-lg">⭐</span>
                <span className="font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

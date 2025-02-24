import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
      return (
            <div className='relative mt-52'>
                  <div className='bg-[#efebe3] flex flex-col lg:flex-row lg:gap-0 gap-7 rounded-lg justify-between items-center lg:w-[900px] px-16 py-6 mx-auto absolute lg:bottom-52 lg:left-80 bottom-80'>
                        <div>
                              <img src='https://i.ibb.co.com/jP29tmT2/yellow-red-ripe-summer-exotic-removebg-preview.png' alt="img" className='h-72' />
                        </div>
                        <div>
                              <h1 className='tracking-wide text-3xl font-medium'>Get Grocery News!</h1>
                              <p className='mt-2 tracking-wide'>Exclusive training tips, ticks, product deals and more.</p>
                              <div className='flex flex-col'>
                                    <input type="text" placeholder='Enter Email' className='bg-white px-4 py-2 mt-3 placeholder:text-sm rounded-md lg:w-[300px]' />
                                    <button className='bg-green-600 w-32 text-white rounded-md mt-4 py-2'>Subscribe</button>
                              </div>
                        </div>
                  </div>
                  <div className="bg-[#179800] py-10 px-6 lg:px-28">
                        <div className="flex flex-col mt-48 lg:flex-row justify-between items-start lg:items-center">
                              {/* Left Section */}
                              <div className="text-white mb-6 lg:mb-0">
                                    <h1 className="text-3xl font-bold uppercase">Nature's Platter</h1>
                                    <p className="mt-2 text-sm">
                                          Discover a world of treats, toys, and <br className="hidden lg:block" />
                                          essentials handpicked for your furry <br className="hidden lg:block" />
                                          friends
                                    </p>
                              </div>

                              {/* Center Section */}
                              <div className="text-white space-y-2 text-sm mb-6 lg:mb-0">
                                    <p className="cursor-pointer hover:underline">Product</p>
                                    <p className="cursor-pointer hover:underline">Service</p>
                                    <p className="cursor-pointer hover:underline">Contact Us</p>
                              </div>

                              {/* Right Section */}
                              <div className="text-white">
                                    <h1 className="text-xl font-bold uppercase">Follow Us</h1>
                                    <div className="flex items-center gap-4 mt-2">
                                          <FaFacebook size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                                          <FaGithub size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                                          <FaInstagramSquare size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                                          <FaYoutube size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;
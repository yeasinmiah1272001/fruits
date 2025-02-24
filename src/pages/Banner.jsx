import React from 'react';

const Banner = () => {
      return (
            <div className='mt-10'>
                  <div className='text-center'>
                        <h1 className='tracking-wide text-4xl font-semibold'>Freshness <span className='text-green-700'>You Can</span></h1>
                        <h1 className='tracking-wide text-4xl font-semibold mt-1'><span className='text-green-700'>Count On,</span> Prices You'll Love!</h1>
                        <p className='mt-4 text-[18px] tracking-wide'>Shop your daily essentials at unbeatable prices. From fresh produce to pantry <br /> staples, we’ve got you covered every day!</p>
                  </div>
                  <div>
                        <img src='https://i.ibb.co.com/HLyndTww/download.png' className='h-[400px] mx-auto mt-6' alt="" />
                  </div>
            </div>
      );
};

export default Banner;
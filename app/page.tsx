'use client'
import React, { useState } from 'react';

function Page() {
  const [price, setGoldPrice] = useState<string>("0.00");
  const getGoldPrice = async () => {

      const response = await fetch('https://goldrate-tau.vercel.app/api/goldrate');
      const html = await response.json();
      console.log(html)
  }
  
  return (
    <div className='bg-gray-100'>
      <div className='w-full  text-center h-30 bg-amber-400 p-4 text-2xl'>
        <h1>Daily Gold Rates</h1>
      </div>
      <div className='flex flex-col h-screen  bg-red-300'>
        {/* one */}
        <div className='flex justify-around items-center  bg-yellow-800 text-white p-2 border-2 border-neutral-600'>
          <span>Joy Alukas</span>
          <button className='p-3 rounded bg-green-500' onClick={() => setGoldPrice("100")}> Get Price</button>
          <h1 className='bg-yellow-500 p-2 rounded'>Gold Rate: {price}</h1>
          <h1 className='bg-zinc-300 p-2 rounded text-black'> Sliver Rate: {price}</h1>
          <button className='p-3 rounded bg-green-400' onClick={() => alert("this website has under daily gold price ")}> why No</button>
        </div>
        {/* two */}
        <div className='flex justify-around items-center  bg-yellow-800 text-white p-2  border-2 border-neutral-600'>
          <span>Jos Alukas</span>
          <button className='p-3 rounded bg-green-500' onClick={() => setGoldPrice("100")}> Get Price</button>
          <h1 className='bg-yellow-500 p-2 rounded'>Gold Rate: {price}</h1>
          <h1 className='bg-zinc-300 p-2 rounded text-black'> Sliver Rate: {price}</h1>
          <button className='p-3 rounded bg-green-400' onClick={() => alert("this website has under daily gold price https://www.josalukkasonline.com/compare")}> why No</button>
        </div>
        {/* three*/}
        <div className='flex justify-around items-center  bg-yellow-800 text-white p-2  border-2 border-neutral-600'>
          <span>kalyan jewellers</span>
          <button className='p-3 rounded bg-green-500' onClick={getGoldPrice}> Get Price</button>
          <h1 className='bg-yellow-500 p-2 rounded'>Gold Rate: {price}</h1>
          <h1 className='bg-zinc-300 p-2 rounded text-black'> Sliver Rate: {price}</h1>
          <button className='p-3 rounded bg-green-400' onClick={() => alert("this website has under daily gold price https://www.josalukkasonline.com/compare")}> why No</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
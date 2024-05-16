'use client'
import React, { useState } from 'react';

function Page() {
  const [price, setGoldPrice] = useState<string>("0.00");
  const getGoldPrice = async () => {
    try {
      const response = await fetch('https://goldrate-tau.vercel.app/api/golrate');
      const html = await response.text();
      console.log(response.body)
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const gold22kElement = Array.from(doc.querySelectorAll("b")).find(el => el.textContent?.includes('22K Gold/10 gm'));
      if (gold22kElement) {
        const goldPriceElement = gold22kElement.nextElementSibling?.querySelector("h3");
        if (goldPriceElement) {
          const goldPrice = goldPriceElement.textContent?.trim() || '';
          setGoldPrice(goldPrice);
        } else {
          setGoldPrice('Price not found');
        }
      } else {
        setGoldPrice('Gold rate not found');
      }
    } catch (error) {
      console.error('Error fetching gold price:', error);
      setGoldPrice('Error fetching gold price');
    }
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
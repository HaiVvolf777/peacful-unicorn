import React, { useState } from 'react';
import { data } from '../data/data.js';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const [products, setproducts] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setproducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setproducts(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1040px] m-auto px-4 py-8'>
      <h1 className='text-zinc-200  font-bold text-4xl text-center font-Belmont pb-8'>
        Unicorns
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-zinc-200 text-2xl'>Clans</p>
          <div className='flex justfiy-between flex-wrap  pb-8'>
            <button
              onClick={() => setproducts(data)}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 '>
              All
            </button>
            <button
              onClick={() => filterType('guardian')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 '>
              Guardian
            </button>
            <button
              onClick={() => filterType('bionic')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 '>
              Bionics
            </button>
            <button
              onClick={() => filterType('hedionic')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 '>
              Hedonics
            </button>
            <button
              onClick={() => filterType('lucifer')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              Lucifer
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-zinc-200  text-2xl '>Price</p>
          <div className='flex justify-between max-w-[390px] w-full pb-8'>
            <button
              onClick={() => filterPrice('0.1ETH')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              0.1ETH
            </button>
            <button
              onClick={() => filterPrice('0.2ETH')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              0.2ETH
            </button>
            <button
              onClick={() => filterPrice('0.3ETH')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              0.3ETH
            </button>
            <button
              onClick={() => filterPrice('0.4ETH')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              0.4ETH
            </button>
            <button
              onClick={() => filterPrice('0.5ETH')}
              className='m-1 border-purple-600 text-zinc-200  border-2 px-1 rounded-md hover:bg-purple-600 hover:text-zinc-200 ' >
              0.5ETH
            </button>
          </div>
        </div>
      </div>

      {/* Display products */}
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 pt-4 py-8 '>
        {products.map((item, index) => (
          <div
            key={index}
            className='border-2 border-transparent bg-zinc-200 rounded-lg hover:scale-105 duration-300'>

            <NavLink to={item.path}>{index[0]}
              <img

                src={item.image}
                alt={item.name}

                className='w-full h-[180px] object-cover rounded-t-lg'/> 
                </NavLink>
            <div className='flex justify-between px-2 py-4 '>
              <p className='font-bold text-black text-center font-Belmont'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

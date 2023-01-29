import React from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import eight from '../assets/8.png'
import { NavLink } from 'react-router-dom'

const Team = () => {
  return (
    <section className="relative py-20 bg-zinc-200">
     

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img className='rounded-xl shadow-lg shadow-purple-400' src={one} alt='' />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">

              <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-24 '>

                <img className='rounded-xl shadow-lg shadow-purple-400' src={one} alt='' />
                <img className='rounded-xl shadow-lg shadow-pink-400' src={two} alt='' />
                <img className='rounded-xl shadow-lg shadow-red-500' src={three} alt='' />
                <img className='rounded-xl shadow-lg shadow-cyan-300' src={four} alt='' />
                <img className='rounded-xl shadow-lg shadow-blue-400' src={eight} alt='' />
                <img className='rounded-xl shadow-lg shadow-pink-600' src={five} alt='' />
                <img className='rounded-xl shadow-lg shadow-red-600' src={six} alt='' />
                <img className='rounded-xl shadow-lg shadow-blue-600' src={seven} alt='' />
              </div>
            </div>
           
          </div>
        </div>
         <div className='flex flex-col justify-center items-center '>
             <NavLink
            className=" m-2 px-6 bg-purple-600 rounded-xl font-bold py-4 text-zinc-200 hover:bg-purple-700  mt-8  "
            to="/product"
          >
            Adopt Unicorn
          </NavLink>
          </div>
      </div>
    </section>
  )
}

export default Team
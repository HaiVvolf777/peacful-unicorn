import React from 'react';
import { FiLink } from 'react-icons/fi';
import { CiShoppingBasket } from 'react-icons/ci';
import { FaFlagCheckered } from 'react-icons/fa';
import { MdCloudDone } from 'react-icons/md';
import { GiUnicorn } from 'react-icons/gi';
import one from '../assets/1.png'

const HowToPlay = () => {
  return (
    <div className="relative py-20 bg-zinc-200 text-black">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={one} />
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg pt-8"
              src={one} />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-5xl font-semibold pb-16">
                <span className='font-Belmont text-5xl text-purple-600'>How To Play </span>
              </h3>

              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 mr-3">
                        <FiLink size={50} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-black text-5xl font-Belmont">
                        Connect
                      </h4>
                    </div>
                  </div>
                  <p className='pt-4 pb-12 text-xl'> Connect your Wallet to the Ethereum and Peacefull Unicorn's Website.</p>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 mr-3">
                        <CiShoppingBasket size={50} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-black text-5xl font-Belmont">
                        purchase
                      </h4>
                    </div>
                  </div>
                  <p className='pt-4 pb-12 text-xl'> Purchase or rent a single Unicorn from the Marketplace.</p>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 mr-3">
                        <FaFlagCheckered size={50} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-black text-5xl font-Belmont">
                        enter race
                      </h4>
                    </div>
                  </div>
                  <p className='pt-4 pb-12 text-xl'> Click the Enter Race button and you will be pushed into a lobby matching your  class, instantly.</p>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 mr-3">
                        <MdCloudDone size={50} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-black text-5xl font-Belmont">
                        prepare
                      </h4>
                    </div>
                  </div>
                  <p className='pt-4 pb-12 text-xl'> Once the lobby is full, you will have 60 seconds to assess the tracks variables and fit gear to help your Pega match the tracks variables.</p>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 mr-3">
                        <GiUnicorn size={50} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-black text-5xl font-Belmont">
                        Race
                      </h4>
                    </div>
                  </div>
                  <p className='pt-4 pb-12 text-xl'> Watch your Pega race against 14 others! If you place in the top 3, you win VIS tokens!</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default HowToPlay
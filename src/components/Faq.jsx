import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Faq = () => {
  return (
    <div className="w-full px-4 pt-8 pb-8  ">
      <div className=" max-w-[1240px] mx-auto px-4 py-12 bg-zinc-200 rounded-2xl ">
      <div className='text-center font-Belmont font-extrabold text-3xl pb-10'> FAQ?</div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-200 px-4 py-2 text-left text-2xl font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-700 focus-visible:ring-opacity-75">
                <span>When can I start adopting a unicorn??</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-700">
              We are actively preparing the launch of our initial batch of genesis unicorns. Please follow us on social media to keep up to date on our launch plans.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="m-4 border-gray-400" />
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-200 px-4 py-2 text-left text-2xl font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-700 focus-visible:ring-opacity-75">
                <span>What rights do I have if I adopt a unicorn??</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-slate-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-700">
              <p> <span className='font-bold'> - </span>When you adopt a unicorn, you will gain membership to our Peaceful Unicorn Metaverse automatically. You will have the usage rights of the unicorn in our metaverse freely, which could be further traded or lent out.</p>
                <p> <span className='font-bold'> - </span>Please be aware that adopting a unicorn do not give you access to its voxel models nor exclusive rights to the intellectual property of the unicorns. You may, however, freely create merchandise using our integrated platform for personal, non-commercial use.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="m-4 border-gray-400" />

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-200 px-4 py-2 text-left text-2xl font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-700 focus-visible:ring-opacity-75">
                <span>Are all Peaceful Unicorn unique?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-slate-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-700">
              Yes, all of our peaceful unicorns are unique.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="m-4 border-gray-400" />

       
      </div>
      
    </div>
    
  )
}

export default Faq
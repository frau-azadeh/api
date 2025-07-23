import React from 'react'

const Footer:React.FC = () => {
  return (
   <footer className='bg-white w-full shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.1)]'>
    <div className='max-w-[1200px] w-full mx-auto px-4'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6 py-5'>
        <div className='lg:row-span-1'>
          <span className='font-bold text-gray-600 block'>Contact API</span>
            <ul className='text-base text-gray-500 space-y-1 cursor-pointer'>
              <li>API Leadership</li>
              <li>About API</li>
              <li>Events</li>
            </ul>
        </div>
        <div className='lg:row-span-1'>
          <span className='font-bold text-gray-600 block'>API Value</span>
          <ul className='text-base text-gray-500 space-y-1 cursor-pointer'>
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Inclusion and Diversity</li>
            <li>Privacy</li>
            <li>Racial Equity and Justice</li>
            <li>Supply Chain</li>
          </ul>
        </div>
        <div className='lg:row-span-1'>
          <span className='text-base text-gray-600 block'>API Store</span>
          <ul className='text-base text-gray-500 space-y-1 cursor-pointer'>
            <li>API Store</li>
            <li>Find a Store</li>
            <li>Today at API</li>
            <li>API Camp</li>
            <li>API Store APR</li>
            <li>Shopping Help</li>
          </ul>
        </div>
        <div className='lg:row-span-1'>
          <span className='text-base text-gray-600 block'>API Wallet</span>
          <ul className='text-base text-gray-500 space-y-1 cursor-pointer'>
            <li>API Card</li>
            <li>API Pay</li>
            <li>API Cash</li>
          </ul>
        </div>
        <div className='flex flex-col items-center border-t border-gray-200 py-4'>
          <p className='text-sm text-gray-500'>Copyright @2025 API</p>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer
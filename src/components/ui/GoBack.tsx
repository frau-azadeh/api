"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { ChevronLeft } from 'lucide-react';

const GoBack:React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <button 
        onClick={()=> router.back()}
        className='flex items-end text-blue-500 hover:text-blue-900 m-2'
      >
        Go Back<ChevronLeft className='h-5 w-5'/>
      </button>
    </div>
  )
}

export default GoBack
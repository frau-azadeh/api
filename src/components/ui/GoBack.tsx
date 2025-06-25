"use client"
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'

const GoBack = () => {
  const router = useRouter();
  return (
    <div className='flex items-end'>
      <button
        onClick={()=>router.back()}
        className='text-blue-500 hover:text-blue-900 m-2 flex items-end '
      >
        Go Back <ChevronLeft className='h-5 w-5'/>
      </button>
    </div>
  )
}

export default GoBack
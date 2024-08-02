import React from 'react'
import banner from '../../assets/banner1.jpeg'
import { IoFastFood } from 'react-icons/io5'
import { GrSecure } from 'react-icons/gr'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='bg-primary/40 dark:bg-gray-950 dark:text-white
    min-h-[550px] flex justify-center items-center py-12 sm:py-0'>

      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center
        '>
            {/*image section*/}
            <div data-aos="zoom-out">
                <img src={banner} alt="banner"
                className='max-w-[400px] h-[350] w-full mx-auto drop-shadow-[-10px_10px_0px_rgba(0,0,0,1)] object-cover' />
            </div>
            {/*text section*/}
            <div className='flex flex-col justify-center
            gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Summer Sale upto 50% off</h1>
                <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


            <div className='flex items-right justify-right gap-4'>
            <div  className='flex items-center gap-4'>
            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
            dark:bg-violet-400'/>
            <p>Quality Products</p>
            </div>
            <div  className='flex items-center gap-4'>
            <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100
            dark:bg-orange-400'/>
            <p>Fast Delivery</p>

            </div>
            <div  className='flex items-center gap-4'>
            <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100
            dark:bg-green-400'/>
            <p>Easy Payment method</p>
            
            </div>
            <div  className='flex items-center gap-4'>
            <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100
            dark:bg-yellow-400'/>
            <p>Get Offers</p>
            
            </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner

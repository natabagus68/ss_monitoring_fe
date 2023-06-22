

import { ChartLine } from '@common/components/charts/ChartLine'
import React from 'react'

export default function AndonPageOne() {
  return (
    <div className='grid grid-cols-4'>

      {/* Column 1 judul */}
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>OEE</span>
      </div>
      <div className='col-span-2 border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Productivity</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Part Number</span>
      </div>


      {/* Column 2 value */}
      <div className='row-span-3 py-12 flex flex-col justify-center items-center border-2'>
        <h1 className="text-white font-bold text-9xl">78</h1>
        <h1 className="text-white font-bold text-4xl">%</h1>
      </div>
      <div className='row-span-3 col-span-2 p-2 border-2'>
        <div className='h-full w-full'>
          <ChartLine datas={[88,52,23,67,46,84,13,47]} />
        </div>
      </div>

      <div className='border-2 py-4 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[42px]">RO1001</h1>
      </div>

      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Part Name</span>
      </div>
      <div className='border-2 py-4 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[42px]">Part A</h1>
      </div>


      {/* Column 3 header */}
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Cycle Time</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Target</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Progress</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Run Time</span>
      </div>


      {/* Column 4 value */}
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-white font-bold text-[67px]">78</h1>
        <h1 className="text-white font-bold text-4xl">second</h1>
      </div>
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-white font-bold text-[67px]">12500</h1>
        <h1 className="text-white font-bold text-4xl">pcs</h1>
      </div>
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-white font-bold text-[67px]">2.304</h1>
        <h1 className="text-white font-bold text-4xl">%</h1>
      </div>
      <div className='flex justify-center items-center border-2 py-[30px]'>
        <h1 className="text-[#74B816] font-bold text-[80px]">00:06:00</h1>
      </div>


      {/* Column 5 Header */}
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Real Cycle</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Actual Ouput</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Not Good</span>
      </div>
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Downtime</span>
      </div>


      {/* Column 6 Value */}
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-white font-bold text-[67px]">78</h1>
        <h1 className="text-white font-bold text-4xl">second</h1>
      </div>
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-white font-bold text-[67px]">12500</h1>
        <h1 className="text-white font-bold text-4xl">pcs</h1>
      </div>
      <div className='flex flex-col justify-center items-center border-2 py-4'>
        <h1 className="text-[#DA3E33] font-bold text-[67px]">2</h1>
        <h1 className="text-[#DA3E33] font-bold text-4xl">pcs</h1>
      </div>
      <div className='flex justify-center items-center border-2 py-[30px]'>
        <h1 className="text-[#DA3E33] font-bold text-[80px]">00:06:00</h1>
      </div>

    </div>
  )
}

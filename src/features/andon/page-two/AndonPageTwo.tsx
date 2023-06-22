

import React from 'react'
import Marquee from 'react-fast-marquee'

export default function AndonPageTwo() {
  const remark = 'ada masalah d line ke 2 bisa di cek'
  const MAX_LENGTH = 22
  console.log(remark.length)
  return (
    <div className='grid grid-cols-4'>

      {/* Column 1 judul */}
      <div className='border-2 bg-[#646566] py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>OEE</span>
      </div>
      <div className='col-span-3 border-2 py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-white'>Production Problem</span>
      </div>


      {/* Column 2 value */}
      <div className='row-span-4 py-12 flex flex-col justify-center items-center border-2'>
        <h1 className="text-white font-bold text-9xl">78</h1>
        <h1 className="text-white font-bold text-4xl">%</h1>
      </div>
      
      <div className='border-2 bg-[#646566] py-3 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Time</span>
      </div>
      <div className='border-2 bg-[#646566] py-3 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Problem</span>
      </div>
      <div className='border-2 bg-[#646566] py-3 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Remark</span>
      </div>

      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">00:02:00</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Waiting Material</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>

      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">00:02:00</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Waiting Material</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>

      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">00:02:00</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Waiting Material</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ?
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>


      {/* Column 4  */}

      <div className='border-2 bg-[#646566] py-3 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Operator</span>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">00:02:00</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Waiting Material</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>


      {/* column 5 */}
      
        {/* Operator */}
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Aziz, Yuzi</h1>
      </div>

      <div className='col-span-3 row-span-2 border-2 py-5 flex justify-center items-center'>
        <span className='font-bold text-4xl text-white'>Data Defect</span>
      </div>
      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Setter</span>
      </div>
        {/* Setter */}
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Lutfi</h1>
      </div>
      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Quantity (pcs) </span>
      </div>
      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Defect Type</span>
      </div>
      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Remark</span>
      </div>




      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>Staff</span>
      </div>

      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">20</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Starch</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>

        {/* Staff */}
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Agung</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">5</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Visual</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>





      <div className='border-2 bg-[#646566] py-2 flex justify-center items-center'>
        <span className='font-bold text-4xl text-[#FAB005]'>QC</span>
      </div>

      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">10</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Strach</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>

        {/* QC */}
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Yudistira</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">31</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        <h1 className="text-white font-bold text-[32px]">Stratch</h1>
      </div>
      <div className='border-2 py-2 flex justify-center items-center'>
        {
          remark.length <= MAX_LENGTH ? 
          <h1 className="text-white font-bold text-[32px]">{remark}</h1>
          :
          <Marquee className="text-white font-bold text-[32px]">{remark}</Marquee>
        }
      </div>
      

      



     

    </div>
  )
}

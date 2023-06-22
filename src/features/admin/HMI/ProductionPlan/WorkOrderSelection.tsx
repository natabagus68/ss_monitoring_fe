

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WorkOrderSelection() {
  const navigate = useNavigate()

  const linkTo = (url) => {
    navigate(url)
  }
  return (
    <main className="w-screen h-screen  bg-[#212121] border-4 border-white flex flex-col">
    <div className="grid grid-cols-4">

      {/* Colom 1 */}
      <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
        <BackIcon onClick={()=> linkTo('../../menu')} />
      </div>
      <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
        <span className={`text-white font-[700] text-5xl `}>Work Order Selection</span>
      </div>
      <div className="flex flex-col bg-[#0D2243]">
        <DateTime />
      </div>

      <div className='col-span-4 grid grid-cols-4 sticky z-30'>
        <div className='flex justify-center items-center py-2 border-2'>
          <span className={`text-[#FAB005] font-[700] text-3xl `}>Select</span>
        </div>
        <div className='flex justify-center items-center py-2 border-2'>
          <span className={`text-[#FAB005] font-[700] text-3xl `}>No Work Order</span>
        </div>
        <div className='flex justify-center items-center py-2 border-2'>
          <span className={`text-[#FAB005] font-[700] text-3xl `}>Part Number</span>
        </div>
        <div className='flex justify-center items-center py-2 border-2'>
          <span className={`text-[#FAB005] font-[700] text-3xl `}>Working Quantity</span>
        </div>
      </div>

      <div className='col-span-4 grid grid-cols-4 h-[400px] overflow-y-auto border-b'>
        <div className='flex justify-center items-center py-8 border-2'>
          <div className='scale-150'>
            <input type="radio" name="" id="workOrderSelection" className='scale-150' />
          </div>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>1209387465</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>123-S123</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>100</span>
        </div>

        <div className='flex justify-center items-center py-8 border-2'>
          <div className='scale-150'>
            <input type="radio" name="" id="workOrderSelection" className='scale-150' />
          </div>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>1209387465</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>123-S123</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>100</span>
        </div>

        <div className='flex justify-center items-center py-8 border-2'>
          <div className='scale-150'>
            <input type="radio" name="" id="workOrderSelection" className='scale-150' />
          </div>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>1209387465</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>123-S123</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>100</span>
        </div>

        <div className='flex justify-center items-center py-8 border-2'>
          <div className='scale-150'>
            <input type="radio" name="" id="workOrderSelection" className='scale-150' />
          </div>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>1209387465</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>123-S123</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>100</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <div className='scale-150'>
            <input type="radio" name="" id="workOrderSelection" className='scale-150' />
          </div>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>1209387465</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>123-S123</span>
        </div>
        <div className='flex justify-center items-center py-8 border-2'>
          <span className={`text-white font-[500] text-4xl `}>100</span>
        </div>

        
      </div>

    </div>
      <div className='flex justify-center items-center py-7'>
        <button className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Start Working</button>
      </div>

  </main>
  )
}

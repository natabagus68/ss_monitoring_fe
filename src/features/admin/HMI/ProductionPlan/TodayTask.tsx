

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductionPlanView() {
  const navigate = useNavigate()

  const linkTo = (url) => {
    navigate(url)
  }
  return (
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
      <div className="grid grid-cols-4">

        {/* Colom 1 */}
        <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
          <button onClick={()=> linkTo('../work-order-selection')} className='bg-[#F79009] px-5 py-4 rounded-md text-white font-bold text-3xl'>Finish Plan</button>
        </div>
        <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
          <span className={`text-white font-[700] text-5xl `}>Today Task</span>
        </div>
        <div className="flex flex-col bg-[#0D2243]">
          <DateTime />
        </div>

        <div className='col-span-4 grid grid-cols-4'>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-[#FAB005] font-[700] text-4xl `}>Task</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-[#FAB005] font-[700] text-4xl `}>Date</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-[#FAB005] font-[700] text-4xl `}>Shift</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-[#FAB005] font-[700] text-4xl `}>Action</span>
          </div>

          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Schedule</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>13/06/23</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Shift 1</span>
          </div>
          <div className='flex justify-center items-center py-10 border-2'>
            <button onClick={()=>linkTo('schedule')} className='bg-[#229BD8] px-10 py-4 rounded-md text-white font-bold text-4xl'>Details</button>
          </div>

          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Equipment</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>13/06/23</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Shift 1</span>
          </div>
          <div className='flex justify-center items-center py-10 border-2'>
            <button onClick={()=>linkTo('equipment')} className='bg-[#229BD8] px-10 py-4 rounded-md text-white font-bold text-4xl'>Details</button>
          </div>

          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Manpower</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>13/06/23</span>
          </div>
          <div className='flex justify-center items-center py-2 border-2'>
            <span className={`text-white font-[500] text-4xl `}>Shift 1</span>
          </div>
          <div className='flex justify-center items-center py-10 border-2'>
            <button onClick={()=>linkTo('manpower')} className='bg-[#229BD8] px-10 py-4 rounded-md text-white font-bold text-4xl'>Details</button>
          </div>
        </div>



      </div>

    </main>
  )
}

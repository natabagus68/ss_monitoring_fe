

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useScheduleFormModel from './ScheduleFormModel'

export default function ScheduleForm() {
  const schedule = useScheduleFormModel()
  return (
    <>
    <ModalConfirm title={`Confirm Save`} message={`Are you sure want to confirmation this action`} open={schedule.modalConfirm} onSave={schedule.onSave} onCancel={()=>schedule.setModalConfirm(false)}  />
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
    <div className="grid grid-cols-4">

      {/* Colom 1 */}
      <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
        <BackIcon onClick={schedule.handleBack}/>
      </div>
      <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
        <span className={`text-white font-[700] text-5xl `}>Schedule</span>
      </div>
      <div className="flex flex-col bg-[#0D2243]">
        <DateTime />
      </div>

      <div className='col-span-4 flex flex-col p-5'>
        <form onSubmit={schedule.handleSave} className='flex flex-col gap-4'>
          <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Part Number</label>
          <select name="partNumber" className='p-5 text-black bg-white text-2xl'>
            <option value="222">122-UUFF</option>
          </select>
          <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Part Name</label>
          <input type="text" name='partNumber' className='p-5 text-black bg-white text-2xl disabled:bg-[#B8B6B6] ' disabled />
          <div className='flex flex-row gap-5'>
            <div className='flex flex-col w-1/2 gap-4'>
              <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Quantity</label>
              <input type="text" name='partNumber' className='p-5 text-black bg-white text-2xl' />
            </div>
            <div className='flex flex-col w-1/2 gap-4'>
              <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Production Purpose</label>
              <select name="partNumber" className='p-5 text-black bg-white text-2xl'>
                <option value="222">122-UUFF</option>
              </select>
            </div>
          </div>
          <button type='submit' role='button' className='bg-[#229BD8] px-5 py-4 mt-4 rounded-md text-white font-bold text-3xl'>Save</button>
        </form>

      </div>

    </div>
      
  </main>
</>
  )
}

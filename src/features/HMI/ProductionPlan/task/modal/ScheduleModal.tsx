

import React from 'react'

export default function ScheduleModal({
  open = null,
  onSave = null,
  handleCancel = null
}) {
  return (
    <dialog
    open={open}
    className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-30 top-0 left-0 fixed p-0 m-0"
  >
    <div className="p-6 absolute bg-[#404040] border-2 border-[#F5F5F5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className='text-[#FAB005] font-bold text-3xl text-center'>Production purpose</h1>
      <form onSubmit={onSave} className='flex flex-col gap-4 pt-5'>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-1" radioGroup='production' value={'export'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Export</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-2" radioGroup='production' value={'local customer'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Local Customer</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-3" radioGroup='production' value={'production sample'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Production Sample</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-4" radioGroup='production' value={'trial/engineering sample'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Trial/Engineering Sample</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-5" radioGroup='production' value={'sparepart'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Sparepart</label>
        </div>
        <div className='flex items-center gap-3'>
          <input type="radio" name="production" id="production-6" radioGroup='production' value={'sparepart'} className='scale-[1.5]' />
          <label className='font-bold text-[#F5F5F5] text-2xl'>Other :</label>
          <input type="text" className='text-[#F5F5F5] text-2xl border-b-2 border-b-[#F5F5F5] bg-transparent focus:outline-none' />
        </div>
      <div className='flex flex-col w-full pt-4 gap-3'>
        <button type='submit' role='button' className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Save</button>
        <button type='button' role='button' onClick={handleCancel} className='bg-[#B8B6B6] px-5 py-4 rounded-md text-white font-bold text-3xl'>Cancel</button>
      </div>
      </form>
    </div>
  </dialog>
  )
}

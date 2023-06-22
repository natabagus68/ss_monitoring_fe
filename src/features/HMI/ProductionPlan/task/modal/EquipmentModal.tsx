

import React from 'react'

export default function EquipmentModal({
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
      <h1 className='text-[#FAB005] font-bold text-3xl text-center'>Change Equipment</h1>
      <div className='flex flex-row gap-3 pt-5'>
        <input type="text" className='p-3 text-black bg-[#ffff] text-xl w-[80%]' placeholder='Cari Equipment' />
        <button className='p-3 border-2 border-[#229BD8] bg-transparent text-2xl w-[20%] text-[#229BD8]'>Cari</button>
      </div>
      <form onSubmit={onSave} className='flex flex-col gap-4 pt-5'>
        <span className='text-[#FAB005] font-bold text-2xl text-center'>Equipment No - Equipment Name</span>
        <div className='flex flex-col gap-3 max-h-40 overflow-y-auto px-2'>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          <div className='flex items-center gap-3'>
            <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
            <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Shearing</label>
          </div>
          
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

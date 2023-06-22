
import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useAdditionalMaterialFormModel from './AdditionalMaterialFormModel'

export default function AdditionalMaterialForm() {

  const form = useAdditionalMaterialFormModel()
  return (
    <>
    <ModalConfirm title={`Confirm Save`} message={`Are you sure want to confirmation this action`} open={form.modalConfirm} onSave={form.onSave} onCancel={()=>form.setModalConfirm(false)}  />
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
    <div className="grid grid-cols-4">

      {/* Colom 1 */}
      <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
        <BackIcon onClick={form.handleBack} />
      </div>
      <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
        <span className={`text-white font-[700] text-5xl `}>Input Data Defect</span>
      </div>
      <div className="flex flex-col bg-[#0D2243]">
        <DateTime />
      </div>

      <div className='col-span-4 flex flex-col p-5'>
        <form onSubmit={form.handleSave} className='flex flex-col gap-4'>
          <div className='flex flex-row gap-3 w-full'>
            <div className='flex flex-col  w-1/2 gap-3'>
              <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Defect Type</label>
              <select name="" id=""  className='p-5 text-black bg-white text-2xl w-full disabled:bg-[#B8B6B6] '>
                <option value="200">Scratch</option>
              </select>
            </div>
            <div className='flex flex-col w-1/2 gap-3'>
              <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Timestamps</label>
              <input type="text" name='partNumber' className='p-5 text-black bg-white text-2xl w-full disabled:bg-[#B8B6B6] ' placeholder='Input name of material' disabled />
            </div>
          </div>

          <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Quantity</label>
          <input type="text" name='partNumber' className='p-5 text-black bg-white text-2xl disabled:bg-[#B8B6B6] ' placeholder='Input quantity' />

          <label htmlFor="partNumber" className='font-bold text-3xl text-[#FFC107]'>Remark</label>
          <input type="text" name='partNumber' className='p-5 text-black bg-white text-2xl disabled:bg-[#B8B6B6] ' placeholder='Input remark' />
          
          <button type='submit' role='button' className='bg-[#229BD8] px-5 py-4 mt-4 rounded-md text-white font-bold text-3xl'>Save</button>
        </form>

      </div>

    </div>
      
  </main>
</>
  )
}

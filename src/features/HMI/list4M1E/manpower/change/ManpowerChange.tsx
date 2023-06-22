

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import useManpowerChangeModel from './ManpowerChangeModel'
import ModalConfirm from '@common/components/modals/ModalConfirm'

export default function ManpowerChange() {
  const change = useManpowerChangeModel()
  return (
    <>
    <ModalConfirm open={change.modalConfirm} onSave={change.onSave} onCancel={()=>change.setModalConfirm(false)} title={`Confirm Clear this data?`} message={`Are you sure want to confirmation this action`} />
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
      <div className="grid grid-cols-4">

        {/* Colom 1 */}
        <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
          <BackIcon onClick={change.handleBack} />
        </div>
        <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
          <span className={`text-white font-[700] text-5xl `}>Change Manpower</span>
        </div>
        <div className="flex flex-col bg-[#0D2243]">
          <DateTime />
        </div>

        <div className='col-span-4 grid grid-cols-3 '>
          <div className='col-span-2 border-2 p-4 '>
            <span className='col-span-4 text-[#FFC107] font-bold text-3xl px-8 py-6 whitespace-nowrap'>Name - Position</span>
            <div className=' h-[400px] overflow-y-auto flex flex-col px-8'>
              <table className='w-full'>
                <tbody>
                  <tr>
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <div className='flex items-center gap-3 py-5'>
                        <input type="radio" name='method' className='scale-[1.5]' />
                        <span className='text-white text-3xl font-bold'>E-001 - Cartoning</span>
                      </div>
                    </td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
          <div className='col-span-1 border-2 p-4'>
            <h1 className='text-[#FAB005] font-bold text-3xl'>Manual Input</h1>
            <div className='flex flex-row gap-3 pt-5'>
              <input type="text" className='p-3 text-black bg-[#ffff] text-xl w-[80%]' placeholder='Search id/Nama' />
              <button className='p-3 border-2 border-[#229BD8] bg-transparent text-2xl w-[20%] text-[#229BD8]'>Cari</button>
            </div>
            <form onSubmit={change.handleSave}  className='flex flex-col gap-4 pt-5'>
              <span className='text-[#FAB005] font-bold text-2xl'>Name - Position</span>
              <div className='flex flex-col gap-3 max-h-40 overflow-y-auto px-2'>
                <div className='flex items-center gap-3'>
                  <input type="radio" name="production" id="production-1" radioGroup='production' value={'E-008'} className='scale-[1.5]' />
                  <label className='font-bold text-[#F5F5F5] text-2xl'>E-008 - Molding</label>
                </div>
                
              </div>

              <div className='flex flex-col w-fit pt-4 gap-3'>
                <button type='submit' role='button' className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Save</button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </main>
  </>
  )
}

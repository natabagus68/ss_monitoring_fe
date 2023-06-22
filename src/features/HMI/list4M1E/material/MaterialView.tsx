


import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useMaterialViewModel from './MaterialViewModel'

export default function MaterialView() {
  const material = useMaterialViewModel()
  return (
    <>
    <ModalConfirm open={material.modalConfirm} onSave={material.onSave} onCancel={()=>material.setModalConfirm(false)} title={`Confirm Save`} message={`Are you sure want to confirmation this action`}/>
      <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
      <div className="grid grid-cols-4">

        {/* Colom 1 */}
        <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
          <BackIcon onClick={()=> material.setModalConfirm(true)} />
        </div>
        <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
          <span className={`text-white font-[700] text-5xl `}>Material</span>
        </div>
        <div className="flex flex-col bg-[#0D2243]">
          <DateTime />
        </div>

        <div className='col-span-4 h-[500px] overflow-y-auto'>

          <table className='w-full '>
            <thead className='sticky top-0 bg-[#212121] w-full'>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Part No</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Part Name</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Qty</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Lot no</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Lot Date</td>
            </thead>
            <tbody className=''>
              <tr>
                <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>C001</td>
                <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Material 1</td>
                <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>1200</td>
                <td className='text-white font-[600] text-2xl p-1 border-2 whitespace-nowrap text-center'>
                  <input type="number" name="" id="" className='w-[200px] p-3 text-black rounded-md' placeholder='200' />
                </td>
                <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>1200</td>
              </tr>
          

            </tbody>
          </table>
      </div>
      </div>
    </main>
  </>
  )
}

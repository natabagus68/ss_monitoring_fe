

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import useManpowerViewModel from './ManpowerViewModel'

export default function ManpowerView() {
  const manpower = useManpowerViewModel()
  return (
    <>
    {/* <ModalConfirm open={prodProblem.modalClear} onSave={prodProblem.onClear} onCancel={prodProblem.handleCancelClear} title={`Confirm Clear this data?`} message={`Are you sure want to confirmation this action`} /> */}
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
    <div className="grid grid-cols-4">

      {/* Colom 1 */}
      <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
        <BackIcon onClick={manpower.handleBack} />
      </div>
      <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
        <span className={`text-white font-[700] text-5xl `}>Manpower</span>
      </div>
      <div className="flex flex-col bg-[#0D2243]">
        <DateTime />
      </div>

      <div className='col-span-4 h-[500px] overflow-y-auto'>

        <table className='w-full '>
          <thead className='sticky top-0 bg-[#212121] w-full'>
              <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Position</td>
              <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Name</td>
              <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Status</td>
              <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Action</td>
            
          </thead>
          <tbody className=''>
            <tr>
              <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Operator</td>
              <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Siska</td>
              <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center ' >
                <div className='flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full border-4 border-[#B6E8D1] bg-[#12B569]'></div>
                  
                </div>
              </td>
              <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                <button onClick={()=>manpower.handleNavigate('change')} className='bg-[#19ACC1] px-5 py-2 rounded-md text-white text-2xl'>Change</button>
              </td>
            </tr>
           

          </tbody>
        </table>
    </div>
    </div>
  </main>
</>
  )
}

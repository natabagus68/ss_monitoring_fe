

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useProductionProblemModel from './ProductionProblemModel'

export default function ProductionProblem() {
  const prodProblem = useProductionProblemModel()
  return (
    <>
        <ModalConfirm open={prodProblem.modalClear} onSave={prodProblem.onClear} onCancel={prodProblem.handleCancelClear} title={`Confirm Clear this data?`} message={`Are you sure want to confirmation this action`} />
        <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
        <div className="grid grid-cols-4">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <BackIcon onClick={prodProblem.handleBack} />
          </div>
          <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
            <span className={`text-white font-[700] text-5xl `}>Production Problem</span>
          </div>
          <div className="flex flex-col bg-[#0D2243]">
            <DateTime />
          </div>

          <div className='col-span-4 h-[500px] overflow-y-auto'>

            <table className='w-full '>
              <thead className='sticky top-0 bg-[#212121] w-full'>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Time</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Problem</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Remark</td>
                
              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>12:21:00</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Human Error</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Material Change to 002</td>
                </tr>
               

              </tbody>
            </table>
        </div>
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={prodProblem.handleInput}  className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Input Data</button>
          </div>
      </main>
    </>
  )
}

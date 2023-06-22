
import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import useMethodLogModel from './MethodLogModel'

export default function MethodLog() {
  const log = useMethodLogModel()
  return (
    <>
      {/* <ModalConfirm open={additional.modalClear} onSave={additional.onClear} onCancel={additional.handleCancelClear} title={`Confirm Clear this data?`} message={`Are you sure want to confirmation this action`} /> */}
      <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
        <div className="grid grid-cols-4">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <BackIcon onClick={log.handleBack}  />
          </div>
          <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
            <span className={`text-white font-[700] text-5xl `}>Log Method</span>
          </div>
          <div className="flex flex-col bg-[#0D2243]">
            <DateTime />
          </div>

          <div className='col-span-4 h-[600px] overflow-y-auto'>

            <table className='w-full '>
              <thead className='sticky top-0 bg-[#212121] w-full'>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Remark</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Report By</td>
                <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Timestamp</td>

              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Change</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Agath</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>20:00</td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

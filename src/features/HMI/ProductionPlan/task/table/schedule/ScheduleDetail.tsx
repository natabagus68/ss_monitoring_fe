
import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import ScheduleModal from '../../modal/ScheduleModal'
import useScheduleDetailModel from './ScheduleDetailModel'
import ModalConfirm from '@common/components/modals/ModalConfirm'

export default function ScheduleDetail() {
  const schedule = useScheduleDetailModel()
  return (
    <>
        <ModalConfirm open={schedule.modalConfirm} onSave={schedule.onSave} onCancel={()=>schedule.setModalConfirm(false)} title={`Confirm Save`} message={`Are you sure want to confirmation this action`} />
        <ScheduleModal open={schedule.modalSelect} onSave={schedule.handleSave} handleCancel={schedule.handleCancel}  />
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

          <div className='col-span-4 h-[500px] overflow-y-auto'>

            <table className='w-full '>
              <thead className='sticky top-0 bg-[#212121] w-full'>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Date</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>No Wo</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Part No</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Name</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>QTY</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Working QTY</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Balanced</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Prod. Purpose</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Check</td>
                
              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>12/12/22</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>1209387465</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Part 1</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>100</td>
                  <td className='text-white font-[600] text-2xl p-1 border-2 whitespace-nowrap text-center'>
                    <input type="number" name="" id="" className='w-[200px] p-3 text-black rounded-md' placeholder='200' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>100</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <button onClick={()=>schedule.handleSelect(22)} className='bg-[#F79009] px-2 py-2 rounded-md text-white text-2xl'>Select</button>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                </tr>
               

              </tbody>
            </table>
        </div>
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={schedule.handleInputWorkSchedule} className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Input Work Order</button>
          </div>
      </main>
    </>
  )
}

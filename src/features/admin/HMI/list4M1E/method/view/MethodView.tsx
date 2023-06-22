
import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useMethodViewModel from './MethodViewModel'

export default function MethodView() {
  const method = useMethodViewModel()
  return (
    <>
    <ModalConfirm title={`Save Changes?`} message={`Are you sure want to confirmation this action`} open={method.modalConfirm} onSave={method.onSave} onCancel={()=>method.setModalConfirm(false)}  />
    <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
    <div className="grid grid-cols-4">

      {/* Colom 1 */}
      <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
        <BackIcon onClick={method.handleBack} />
      </div>
      <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
        <span className={`text-white font-[700] text-5xl `}>Method</span>
      </div>
      <div className="flex flex-col bg-[#0D2243]">
        <DateTime />
      </div>
      
      <span className='col-span-4 text-[#FFC107] font-bold text-3xl px-8 py-6'>Name</span>

      <div className='col-span-4 h-[300px] overflow-y-auto flex flex-col px-8'>
       <table className='w-full'>
        <tbody>
          <tr >
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
          </tr>
          <tr >
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
          </tr>
          <tr >
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
            <td>
              <div className='flex items-center gap-3 py-5'>
                <input type="radio" name='method' className='scale-[1.5]' />
                <span className='text-white text-3xl font-bold'>Process Name1</span>
              </div>
            </td>
          </tr>
          
          
        </tbody>
       </table>

      </div>

    </div>
    <div className='flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-row justify-between border-b-2 w-full p-3'>
          <div className='flex gap-3'>
            <button className='p-3 text-white font-bold text-2xl bg-[#229BD8] rounded-md'>Show Work Instruction</button>
            <button onClick={()=>method.handleNavigate('log')} className='p-3 text-white font-bold text-2xl bg-[#F59F00] rounded-md'>Log</button>
          </div>
          <div className='flex flex-row'>
            <button className='p-3 border border-white text-white'>Prev</button>
            <div className='p-3 border border-white text-white flex justify-center items-center'>
              <span>
                1
              </span>
            </div>
            <button className='p-3 border border-white text-white'>Next</button>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-3 w-full px-5'>
          <span className='col-span-4 text-[#FFC107] font-bold text-3xl px-8 py-6'>Remark</span>
          <input type="text" className='p-4 text-black w-full'/>
          <button onClick={()=> method.setModalConfirm(true)} className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl whitespace-nowrap'>Save Remark</button>
        </div>
    </div>
      
  </main>
</>
  )
}

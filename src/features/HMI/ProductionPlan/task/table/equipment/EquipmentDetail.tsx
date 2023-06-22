
import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import useEquipmentDetailModel from './EquipmentDetailModel'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import EquipmentModal from '../../modal/EquipmentModal'

export default function EquipmentDetail() {
  const equipment = useEquipmentDetailModel()
  return (
    <>
      <ModalConfirm open={equipment.modalConfirm} onSave={equipment.onSave} onCancel={()=>equipment.setModalConfirm(false)} title={`Confirm Save`} message={`Are you sure want to confirmation this action`}/>
      <EquipmentModal open={equipment.modalChange} handleCancel={equipment.handleCancel} onSave={equipment.handleSave} />
        <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
        <div className="grid grid-cols-4">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <BackIcon onClick={equipment.handleBack}/>
          </div>
          <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
            <span className={`text-white font-[700] text-5xl `}>Equipment</span>
          </div>
          <div className="flex flex-col bg-[#0D2243]">
            <DateTime />
          </div>

          <div className='col-span-4 h-[500px] overflow-y-auto'>

            <table className='w-full '>
              <thead className='sticky top-0 bg-[#212121] w-full'>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Equip No</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Name</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Quantity</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Last Verif</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Check</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Remark</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Action</td>
              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Item A</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>1200</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>12/12/22</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-1 border-2 whitespace-nowrap text-center'>
                    <input type="number" name="" id="" className='w-[200px] p-3 text-black rounded-md' placeholder='200' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <button onClick={()=>equipment.handleChange(22)} className='bg-[#229BD8] px-4 py-2 rounded-md text-white text-2xl'>Change</button>
                  </td>
                </tr>
            

              </tbody>
            </table>
        </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Input Equipment</button>
          </div>
      </main>
    </>
  )
}

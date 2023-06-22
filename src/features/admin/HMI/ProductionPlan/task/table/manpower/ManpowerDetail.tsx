

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import useManpowerDetailModel from './ManpowerDetailModel'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import ManpowerModal from '../../modal/ManpowerModal'
import ModalDelete from '@common/components/modals/ModalDelete'

export default function ManpowerDetail() {
  const manpower = useManpowerDetailModel()
  return (
    <> 
        <ModalDelete open={manpower.modalDelete} onCancel={manpower.onDeleteCancel} onDelete={manpower.onDelete} />
        <ModalConfirm open={manpower.modalConfirm}  onSave={manpower.onSave} onCancel={()=>manpower.setModalConfirm(false)} title={`Confirm Save`} message={`Are you sure want to confirmation this action`}/>
        <ManpowerModal open={manpower.modalChange} handleCancel={manpower.handleCancel} onSave={manpower.handleSave} />
        <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
        <div className="grid grid-cols-4">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <BackIcon onClick = {manpower.handleBack} />
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
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>ID</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Name</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Process Name</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Check</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Indicator</td>
                  <td className='text-[#FAB005] font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Action</td>
              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Sri Djumiati</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <select className='w-[200px] p-3 text-black rounded-md'>
                      <option value="solder">Solder</option>
                    </select>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex items-center gap-3'>
                      <div className='h-5 w-5 rounded-full border-4 border-[#BAC9E1] bg-[#20519F]'></div>
                      <span>New Operator</span>
                    </div>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex flex-row gap-3 justify-center'>
                      <button onClick={()=>manpower.handleChange(22)} className='bg-[#229BD8] px-4 py-2 rounded-md text-white text-2xl'>Change</button>
                      <button onClick={()=> manpower.handleDelete(22)} className='bg-[#F04438] px-4 py-2 rounded-md text-white text-2xl'>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Sri Djumiati</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <select className='w-[200px] p-3 text-black rounded-md'>
                      <option value="solder">Solder</option>
                    </select>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex items-center gap-3'>
                      <div className='h-5 w-5 rounded-full border-4 border-[#B6E8D1] bg-[#12B569]'></div>
                      <span>Exsiting</span>
                    </div>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex flex-row gap-3 justify-center'>
                      <button className='bg-[#229BD8] px-4 py-2 rounded-md text-white text-2xl'>Change</button>
                      <button className='bg-[#F04438] px-4 py-2 rounded-md text-white text-2xl'>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Sri Djumiati</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <select className='w-[200px] p-3 text-black rounded-md'>
                      <option value="solder">Solder</option>
                    </select>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex items-center gap-3'>
                      <div className='h-5 w-5 rounded-full border-4 border-[#FDDDB3] bg-[#F79009]'></div>
                      <span>Subtitution</span>
                    </div>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex flex-row gap-3 justify-center'>
                      <button className='bg-[#229BD8] px-4 py-2 rounded-md text-white text-2xl'>Change</button>
                      <button className='bg-[#F04438] px-4 py-2 rounded-md text-white text-2xl'>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>123-S123</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>Sri Djumiati</td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <select className='w-[200px] p-3 text-black rounded-md'>
                      <option value="solder">Solder</option>
                    </select>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <input type="checkbox" name="" id="" className='scale-[3.0]' />
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex items-center gap-3'>
                      <div className='h-5 w-5 rounded-full border-4 border-[#FAC5C1] bg-[#F04438]'></div>
                      <span>Absent</span>
                    </div>
                  </td>
                  <td className='text-white font-[600] text-2xl p-3 border-2 whitespace-nowrap text-center'>
                    <div className='flex flex-row gap-3 justify-center'>
                      <button className='bg-[#229BD8] px-4 py-2 rounded-md text-white text-2xl'>Change</button>
                      <button className='bg-[#F04438] px-4 py-2 rounded-md text-white text-2xl'>Delete</button>
                    </div>
                  </td>
                </tr>
            

              </tbody>
            </table>
        </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='bg-[#229BD8] px-5 py-4 rounded-md text-white font-bold text-3xl'>Input Manpower</button>
          </div>
      </main>
    </>
  )
}

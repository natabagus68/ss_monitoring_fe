

import DateTime from '@common/components/DateTime'
import BackIcon from '@common/components/icons-new/BackIcon'
import React from 'react'
import layoutImg from '@common/components/img/layout.png'
import { useNavigate } from 'react-router-dom'

export default function LayoutView() {
  const navigate  = useNavigate()
  return (
    <>
      {/* <ModalConfirm open={prodProblem.modalClear} onSave={prodProblem.onClear} onCancel={prodProblem.handleCancelClear} title={`Confirm Clear this data?`} message={`Are you sure want to confirmation this action`} /> */}
      <main className="w-screen h-screen overflow-y-auto bg-[#212121] border-4 border-white flex flex-col">
        <div className="grid grid-cols-4">

          {/* Colom 1 */}
          <div className="flex justify-center items-center border-2 overflow-hidden bg-[#0D2243]">
            <BackIcon onClick={()=> navigate(-1)} />
          </div>
          <div className="col-span-2 flex justify-center items-center border-2 py-4 bg-[#0D2243]">
            <span className={`text-white font-[700] text-5xl `}>Layout</span>
          </div>
          <div className="flex flex-col bg-[#0D2243]">
            <DateTime />
          </div>

          <div className='col-span-4 p-10'>
            <img src={layoutImg} alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

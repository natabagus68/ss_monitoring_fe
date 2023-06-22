

import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useScheduleFormModel() {
  const navigate = useNavigate()
  const [modalConfirm, setModalConfirm] = useState(false)

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // navigate(`${idSchedule}/input-schedule`)
    setModalConfirm(true)
  }

  const handleBack = () => {
    navigate(-1)
  }

  const onSave = () => {
    setModalConfirm(false)
    navigate('../../../work-order-selection')
  }
  return {
    modalConfirm,
    setModalConfirm,
    handleSave,
    handleBack,
    onSave
  }
}

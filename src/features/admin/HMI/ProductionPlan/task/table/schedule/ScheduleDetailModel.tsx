

import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useScheduleDetailModel() {
  const navigate = useNavigate()
  const [modalSelect, setModalSelect] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [idSchedule, setIdSchedule] = useState('')

  const handleSelect = (id) => {
    setIdSchedule(id)
    setModalSelect(true)
  }

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModalConfirm(true)
  }

  const handleCancel = () => {
    setIdSchedule('')
    setModalSelect(false)
  }
  const handleInputWorkSchedule = () => {
    navigate('input-schedule')
  }
  const handleBack = () => {
    navigate(-1)
  }

  const onSave = () => {
    navigate('../../work-order-selection')
  }

  return {
    modalSelect,
    handleCancel,
    handleSelect,
    handleSave,
    handleBack,
    handleInputWorkSchedule,
    onSave,
    setModalConfirm,
    modalConfirm
  }
}



import React, {FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useEquipmentDetailModel() {

  const navigate = useNavigate()
  const [modalChange, setModalChange] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [idEquipment, setIdEquipment] = useState('')

  const handleChange = (id) => {
    setIdEquipment(id)
    setModalChange(true)
  }

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModalConfirm(true)
  }

  const handleCancel = () => {
    setIdEquipment('')
    setModalChange(false)
  }

  const handleBack = () => {
    navigate(-1)
  }

  const onSave = () => {
    navigate('../../work-order-selection')
  }
  return {
    modalChange,
    modalConfirm,
    setModalConfirm,
    handleChange,
    handleCancel,
    handleBack,
    onSave,
    handleSave
  }
}

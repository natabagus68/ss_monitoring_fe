

import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useManpowerDetailModel() {
  const navigate = useNavigate()
  const [modalChange, setModalChange] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [idEquipment, setIdEquipment] = useState('')

  const handleChange = (id) => {
    setIdEquipment(id)
    setModalChange(true)
  }

  const handleDelete = (id) => {
    setIdEquipment(id)
    setModalDelete(true)
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
  const onDelete = () => {
    navigate('../../work-order-selection')
    setModalDelete(false)
  }
  const onDeleteCancel = () => {
    setModalDelete(false)
    setIdEquipment('')
  }
  return {
    modalChange,
    modalConfirm,
    modalDelete,
    setModalConfirm,
    setModalDelete,
    handleChange,
    handleCancel,
    handleDelete,
    handleBack,
    onSave,
    onDelete,
    handleSave,
    onDeleteCancel
  }
}

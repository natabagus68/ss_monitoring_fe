

import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAdditionalMaterialModel() {
  const navigate = useNavigate()
  const [modalClear, setModalClear] = useState(false)
  const [idAdditional, setIdAddtional] = useState('')

  const handleClear = (id) => {
    setIdAddtional(id)
    setModalClear(true)
  }

  const handleCancelClear = () => {
    setIdAddtional('')
    setModalClear(false)
  }

  const onClear = () => {
    setIdAddtional('')
    setModalClear(false)
  }
  const handleInput = () => {
    navigate('input')
  }

  const handleBack = () => {
    navigate(-1)
  }
 
  return {
    modalClear,
    handleCancelClear,
    handleClear,
    onClear,
    handleInput,
    handleBack
  }
}

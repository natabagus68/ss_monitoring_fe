

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function useMethodLogModel() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  } 

  const handleNavigate = (url) => {
    navigate(`${url}`)
  }
  return {
    handleBack,
    handleNavigate
  }
}

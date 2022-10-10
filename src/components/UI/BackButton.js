import React from 'react'
// import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '.'
// import { themeClass } from '../../variables'

function BackButton({
  text = 'Click to go back',
  size = 'md',
  className = '',
}) {
  const navigate = useNavigate()

  return (
    <CustomButton
      size={size}
      className={`mb-1 ${className}`}
      // style={{backgroundColor:themeClass}}
      onClick={() => navigate(-1)}
    >
      <span className="d-flex flex-direction-row align-items-center">
        {/* <ArrowLeft className="mr-1" size={20} /> */}
        {text}
      </span>
    </CustomButton>
  )
}

export default BackButton

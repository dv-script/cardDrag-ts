import { useState } from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillEyeSlashFill } from 'react-icons/bs'

import * as Styled from './style'

import { IHandleChange, IHandleTogglePassword, IInput } from './types'

export default function Input({ label, type, ...props }: IInput) {
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event: IHandleChange) => {
    setValue(event.target.value)
  }

  const handleTogglePassword = (event: IHandleTogglePassword) => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <Styled.InputContent>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input
        {...props}
        type={showPassword ? 'text' : type}
        onChange={handleChange}
      />
      {type === 'password' && value.length > 0 ? (
        <Styled.TogglePassword onClick={handleTogglePassword}>
          {showPassword ? (
            <IoEyeSharp size={'20px'} style={{ color: '#969696' }} />
          ) : (
            <BsFillEyeSlashFill size={'20px'} style={{ color: '#969696' }} />
          )}
        </Styled.TogglePassword>
      ) : null}

      <Styled.Span />
    </Styled.InputContent>
  )
}

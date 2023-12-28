import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type Props = {
  timerActive: boolean
  inputText: string
  setInputText: (value: string) => void
}

export const InputArea: React.FC<Props> = ({timerActive, inputText, setInputText}) => {
  const inputTextAreaRef = useRef<HTMLTextAreaElement>(null)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)

  useEffect(() => {
    if (timerActive === true) {
      inputTextAreaRef.current?.focus()
    }
  }, [inputTextAreaRef, timerActive])

  return (
    <Textarea
      onChange = {handleChange}
      disabled = {!timerActive}
      value = {inputText}
      ref = {inputTextAreaRef}
    ></Textarea>
  )

}
const Textarea = styled.textarea`
  width: 800px;
  height: 500px;
  font-size: 24px;
`

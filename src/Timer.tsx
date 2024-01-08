import React from 'react'
import styled from 'styled-components'

type Props = {
  timerActive: boolean
  remainingSeconds: number
  showSeparator: boolean
  handleStart: () => void
  handleStop: () => void
}

const remainingSecondsToClock = (remainingSeconds: number, showSeparator: boolean) : string => {
  const minutes = Math.floor(remainingSeconds / 60).toString()
  const seconds = (remainingSeconds % 60).toString().padStart(2, '0')
  return (
    showSeparator
      ? `${minutes}:${seconds}`
      : `${minutes} ${seconds}`
  )
}

export const Timer: React.FC<Props> = ({ timerActive, remainingSeconds, showSeparator, handleStart, handleStop }) => {
  return (
    <Div>
      { remainingSecondsToClock(remainingSeconds, showSeparator) }
      { timerActive
        ? <button onClick={handleStop}>stop</button>
        : <button onClick={handleStart}>start</button>
      }
    </Div>
  )
}

const Div = styled.div`
  font-size: xxx-large;
  display: flex;
  justify-content: center;
  align-items: center;
`

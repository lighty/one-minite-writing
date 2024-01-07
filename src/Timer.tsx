import React from 'react'
import styled from 'styled-components'

type Props = {
  timerActive: boolean
  remainingSeconds: number
  handleStart: () => void
  handleStop: () => void
}

const remainingSecondsToClock = (remainingSeconds: number) : string => {
  const minutes = Math.floor(remainingSeconds / 60).toString()
  const seconds = (remainingSeconds % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

export const Timer: React.FC<Props> = ({ timerActive, remainingSeconds, handleStart, handleStop }) => {
  return (
    <Div>
      { remainingSecondsToClock(remainingSeconds) }
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

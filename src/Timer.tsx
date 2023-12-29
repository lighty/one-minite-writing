import React from 'react'
import styled from 'styled-components'

type Props = {
  timerActive: boolean
  time: number
  handleStart: () => void
  handleStop: () => void
}

export const Timer: React.FC<Props> = ({ timerActive, time, handleStart, handleStop }) => {
  return (
    <Div>
      { time }
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

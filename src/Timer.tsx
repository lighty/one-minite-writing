import React from 'react'
import styled from 'styled-components'

type Props = {
  timerActive: boolean
  time: number
  handleClick: () => void
}

export const Timer: React.FC<Props> = ({ timerActive, time, handleClick }) => {
  return (
    <Div>
      {timerActive ?
        time
        :
        <a onClick={handleClick}>push start</a>
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

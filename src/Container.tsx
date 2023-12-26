import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({children}) => (
  <Div>
    {children}
  </Div>
);

const Div = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

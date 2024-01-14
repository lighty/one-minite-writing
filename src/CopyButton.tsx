import React from 'react'
import styled from 'styled-components'

type Props = {
  handleCopy: () => void
}

export const CopyButton: React.FC<Props> = ({handleCopy}) => (
  <Div>
    <button onClick={handleCopy}>クリップボードにコピーする</button>
  </Div>
);

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

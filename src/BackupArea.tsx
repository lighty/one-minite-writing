import React from 'react'
import styled from 'styled-components'

type Props = {
  backupText: string
}

export const BackupArea: React.FC<Props> = ({backupText}) =>(
  <Textarea
    disabled = {true}
    value = {backupText}
  ></Textarea>
)

const Textarea = styled.textarea`
  width: 800px;
  height: 500px;
  font-size: 16px;
`

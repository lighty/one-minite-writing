import './App.css';
import { useState } from 'react'
import { Timer } from './Timer';
import { InputArea } from './InputArea';
import { BackupArea } from './BackupArea';
import { Container } from './Container';

const App = () => {
  const [timerActive, setTimerActive] = useState(false)
  const [time, setTime] = useState(0)
  const [inputText, setInputText] = useState('')
  const [backupText, setBackupText] = useState('')
  const startTimer = () => {
    setTimerActive(true)
    startTime = new Date();
    render();
  }
  let startTime = new Date();

  const render = () => {
    const now = new Date();
    let end = new Date();
    end.setTime(startTime.getTime() + (3 * 1000))
    const diffTime = end.getTime() - now.getTime()
    const diffMin = Math.ceil(diffTime / 1000)
    setTime(diffMin)
    if(diffMin > -1) {
      setTime(diffMin)
      setTimeout(render, 1000);
    } else {
      setTimerActive(false)
      // 最新のinputTextをsetBackupTextに渡すために関数にして渡す
      setInputText((inputText) => {
        if(inputText !== '') {
          setBackupText(inputText + "\n\n---\n\n" + backupText)
        }
        return ''
      })
    }
  }

  return (
    <>
      <Timer
        timerActive={timerActive}
        time={time}
        handleClick={startTimer}
      ></Timer>
      <Container>
        <InputArea
          timerActive={timerActive}
          inputText={inputText}
          setInputText={setInputText}
        ></InputArea>
      </Container>
      <Container>
        <BackupArea
          backupText={backupText}
        ></BackupArea>
      </Container>
    </>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react'
import { Timer } from './Timer';
import { InputArea } from './InputArea';
import { BackupArea } from './BackupArea';
import { Container } from './Container';

const App = () => {
  const initPeriod = 60
  const [timerActive, setTimerActive] = useState(false)
  const [time, setTime] = useState(initPeriod)
  const [inputText, setInputText] = useState('')
  const [backupText, setBackupText] = useState('')
  const startTimer = () => {
    setTimerActive(true)
    setTime(initPeriod)
  }
  const stopTimer = () => {
    setTimerActive(false)
  }

  useEffect(() => {
    if (!timerActive) return;
    const intervalId = setInterval(() => {
      setTime((time) => {
        if (time > 0) {
          return time - 1
        } else {
          setTimerActive(false)
          setInputText((inputText) => {
            if(inputText !== '') {
              setBackupText(inputText + "\n\n---\n\n" + backupText)
            }
            return ''
          })
          return time
        }
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [time, timerActive, backupText])

  return (
    <>
      <Timer
        timerActive={timerActive}
        remainingSeconds={time}
        handleStart={startTimer}
        handleStop={stopTimer}
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

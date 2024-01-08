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
  const [showSeparator, setShowSeparator] = useState(true)
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
        if (time > 0 && showSeparator) {
          setShowSeparator(false)
          return time
        }
        if (time > 0) {
          setShowSeparator(true)
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
    }, 500) // :を点滅させるために0.5秒ごとに処理する
    return () => clearInterval(intervalId)
  }, [time, timerActive, showSeparator, backupText])

  return (
    <>
      <Timer
        timerActive={timerActive}
        remainingSeconds={time}
        showSeparator={showSeparator}
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

import './App.css';
import { Timer } from './Timer';
import { TextArea } from './TextArea';
import { Container } from './Container';

function App() {
  return (
    <>
      <Timer></Timer>
      <Container>
        <TextArea></TextArea>
      </Container>
      <Container>
        <TextArea></TextArea>
      </Container>
    </>
  );
}

export default App;

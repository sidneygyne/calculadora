import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const hadleAddNunber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleTimesNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        case '*':
          handleTimesNumbers()
          break
        default:
          break
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="<-" onClick={() => hadleAddNunber('')} />
          <Button label="%" onClick={() => hadleAddNunber('%')} />
          <Button label="/" onClick={() => hadleAddNunber('/')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => hadleAddNunber('7')} />
          <Button label="8" onClick={() => hadleAddNunber('8')} />
          <Button label="9" onClick={() => hadleAddNunber('9')} />
          <Button label="x" onClick={handleTimesNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => hadleAddNunber('4')} />
          <Button label="5" onClick={() => hadleAddNunber('5')} />
          <Button label="6" onClick={() => hadleAddNunber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => hadleAddNunber('1')} />
          <Button label="2" onClick={() => hadleAddNunber('2')} />
          <Button label="3" onClick={() => hadleAddNunber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="+/-" onClick={() => hadleAddNunber('')} />
          <Button label="0" onClick={() => hadleAddNunber('0')} />
          <Button label="," onClick={() => hadleAddNunber(',')} />
          <Button label="=" onClick={handleEquals} />
        </Row>

      </Content>
    </Container >
  );
}

export default App;

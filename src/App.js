import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  //Reseta calculadora, limpa dados
  const handleOnClear = () => {
    setCurrentNumber('0')
    setPreviousNumber('0')
    setOperator('')
  }
  //Digitacao dos numeros
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  //Defina a operação (+, -, *, /, %)
  const handleOperation = (op) => {
    setPreviousNumber(currentNumber);
    setCurrentNumber('0');
    setOperator(op);
  }
  //Apaga numero
  const handleBackspace = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  }
  

  //Calculo do resultado
  const calculateResult = () => {
    if (operator && previousNumber !== null) {
      const prev = parseFloat(previousNumber);
      const current = parseFloat(currentNumber);
      let result;

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = current !== 0 ? prev / current : 'Erro';
          break;
        case '%':
          result = prev % current;
          break;
        default:
          return;
      }

      setCurrentNumber(result.toString());
      setPreviousNumber(null);
      setOperator(null);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="<-" onClick={handleBackspace}  />
          <Button label="%" onClick={() => handleOperation('%')} />
          <Button label="/" onClick={() => handleOperation('/')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleOperation('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="00" onClick={() => handleAddNumber('00')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={calculateResult} />
        </Row>

      </Content>
    </Container >
  );
}

export default App;

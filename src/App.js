import { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  //Ativar efeito de click quando digitado no teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      setActiveButton(key);
      setTimeout(() => setActiveButton(null), 200); // Remove a classe após 200ms

      if (!isNaN(key)) {
        handleAddNumber(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        handleBackspace();
      } else if (key === 'Escape') {
        handleOnClear();
      } else if (['+', '-', '*', '/', '%'].includes(key)) {
        handleOperation(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentNumber, previousNumber, operator]);


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
          <Button label="C" onClick={handleOnClear} className={activeButton === 'Escape' ? 'active' : ''} />
          <Button label="<-" onClick={handleBackspace} className={activeButton === 'Backspace' ? 'active' : ''} />
          <Button label="%" onClick={() => handleOperation('%')} className={activeButton === '%' ? 'active' : ''} />
          <Button label="/" onClick={() => handleOperation('/')} className={activeButton === '/' ? 'active' : ''} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} className={activeButton === '7' ? 'active' : ''}/>
          <Button label="8" onClick={() => handleAddNumber('8')} className={activeButton === '8' ? 'active' : ''}/>
          <Button label="9" onClick={() => handleAddNumber('9')} className={activeButton === '9' ? 'active' : ''}/>
          <Button label="x" onClick={() => handleOperation('*')} className={activeButton === '*' ? 'active' : ''}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} className={activeButton === '4' ? 'active' : ''}/>
          <Button label="5" onClick={() => handleAddNumber('5')} className={activeButton === '5' ? 'active' : ''}/>
          <Button label="6" onClick={() => handleAddNumber('6')} className={activeButton === '6' ? 'active' : ''}/>
          <Button label="-" onClick={() => handleOperation('-')} className={activeButton === '-' ? 'active' : ''}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} className={activeButton === '1' ? 'active' : ''}/>
          <Button label="2" onClick={() => handleAddNumber('2')} className={activeButton === '2' ? 'active' : ''}/>
          <Button label="3" onClick={() => handleAddNumber('3')} className={activeButton === '3' ? 'active' : ''}/>
          <Button label="+" onClick={() => handleOperation('+')} className={activeButton === '+' ? 'active' : ''} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} className={activeButton === '0' ? 'active' : ''}/>
          <Button label="00" onClick={() => handleAddNumber('00')} className={activeButton === '00' ? 'active' : ''}/>
          <Button label="." onClick={() => handleAddNumber('.')} className={activeButton === '.' ? 'active' : ''}/>
          <Button label="=" onClick={calculateResult} className={activeButton === 'Enter' ? 'active' : ''} />
        </Row>

      </Content>
    </Container >
  );
}

export default App;

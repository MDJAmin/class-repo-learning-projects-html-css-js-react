import { useState } from "react";

export default function Calc() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      if (value === '=') {
        try {
          const result = eval(inputValue);
          setResult(result.toString());
        } catch (error) {
          setResult('Error');
        }
      } else {
        setInputValue(inputValue + value);
      }
    };
  
    const handleClear = () => {
      setInputValue('');
      setResult('');
    };
  
    return (
      <>
        <div>
          <div>
            <input type="text" value={inputValue} readOnly />
            <p>Result: {result}</p>
          </div>
          <div>
            <div>
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
            </div>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
  
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
  
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
  
            <button onClick={() => handleButtonClick('=')}>=</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </>
    );
  }
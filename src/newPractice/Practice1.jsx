import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => setInput((prevInput) => prevInput + value);
  const handleClearButtonClick = () => setInput('');
  const handleEqualButtonClick = () => setInput((eval(input) || 'Error').toString());

  return (
    <div className='container bg-primary'>
      <h4 className='text-center my-4 '>Calculator</h4>
      <input type='text' className='form-control mb-3' value={input} onChange={(e) => setInput(e.target.value)} />
      <div className='row g-2'>
        {['7', '8', '9', '/'].map((value) => (
          <div key={value} className='col'>
            <button className='btn btn-secondary w-100' onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          </div>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <div key={value} className='col'>
            <button className='btn btn-secondary w-100' onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          </div>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <div key={value} className='col'>
            <button className='btn btn-secondary w-100' onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          </div>
        ))}
        <div className='col'>
          <button className='btn btn-secondary w-100' onClick={() => handleButtonClick('0')}>
            0
          </button>
        </div>
        <div className='col'>
          <button className='btn btn-secondary w-100' onClick={() => handleButtonClick('.')}>
            .
          </button>
        </div>
        <div className='col'>
          <button className='btn btn-success w-100' onClick={handleEqualButtonClick}>
            =
          </button>
        </div>
        <div className='col'>
          <button className='btn btn-danger w-100' onClick={handleClearButtonClick}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

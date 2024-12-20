import InputContainer from './components/InputContainer.jsx';
import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';
import Table from './components/Table.jsx';

function App() {

  const [myData, setMyData] = useState({
    initial: 15000,
    annual: 1200,
    expected: 6,
    timeRange: 10
  });

  function handleChange(identifier, newValue) {
    setMyData((prevValues) => ({
      ...prevValues,
      [identifier]: newValue,
    }));
  }

  const numInitial = parseFloat(myData.initial) || 0;
  const numAnnual = parseFloat(myData.annual) || 0;
  const numExpected = parseFloat(myData.expected) || 0;
  const numDuration = parseInt(myData.timeRange) || 0;

  const annualData = calculateInvestmentResults(numInitial, numAnnual, numExpected, numDuration);

  return (
    <>
      <section id='user-input'>
        <div className='input-group'>
          <div>
            <InputContainer myData={myData} onHandleChange={handleChange} identifier={'initial'} name={'Initial Investment'} />
            <InputContainer myData={myData} onHandleChange={handleChange} identifier={'annual'} name={'Annual Investment'} />
          </div>
          <div>
            <InputContainer myData={myData} onHandleChange={handleChange} identifier={'expected'} name={'Expected Return'} />
            <InputContainer myData={myData} onHandleChange={handleChange} identifier={'timeRange'} name={'Duration'} />
          </div>
        </div>
      </section>

      <section id='result' className='center'>
        <Table newData={annualData} />
      </section>
    </>
  )
}

export default App;
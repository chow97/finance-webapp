
import './App.css';
import { useState } from 'react';


function App() {
  var [inputValue1, setInputValue1] = useState('0.0');
  var [inputValue2, setInputValue2] = useState('0.0');

  function test(){
    console.log("Successful!");
  }

  function inputChangeValue1(event) {
    setInputValue1(event.target.value);
  }

  function inputChangeValue2(event) {
    setInputValue2(event.target.value);
  }




  return (
    <div className="currencyExchange">
        
          <h2>Currency Exchange</h2>
          <div className="container1">
          <p>
          <input type="text" id="currency1" onChange={inputChangeValue1} value={inputValue1}></input> 
          <select>
            <option value="usd">USD</option>
            <option value="myr">MYR</option>
          </select>
          <button type="button" id="exchangeButton" onClick={test}>&#x21CB;</button>
          <input type="text" id="currency2"  onChange={inputChangeValue2} value={inputValue2} ></input>
          <span id="result"></span>
          <select>
            <option value="usd">MYR</option>
            <option value="myr">USD</option>
          </select>
          
        </p>
        </div>
    </div>
  );

}






export default App;

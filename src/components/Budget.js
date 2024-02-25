import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, remainingBudget, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const value = event.target.value;

    // Check if the value is a number
    if (!isNaN(value)) {
      // Check if the value is within the allowed range
      if (parseFloat(value) >= totalAllocatedBudget() && parseFloat(value) <= 20000) {
        setNewBudget(value);
      } else {
        displayError('Budget must be at least the total allocated budget and cannot exceed 20,000.');
      }
    } else {
      displayError('Please enter a valid number.');
    }
  };

  const handleIncreaseDecrease = (amount) => {
    const updatedBudget = parseFloat(newBudget) + amount;

    // Check if the updated budget is within the allowed range
    if (amount > 0 || (updatedBudget >= totalAllocatedBudget() && updatedBudget <= 20000)) {
      setNewBudget(updatedBudget);
    } else {
      displayError('Budget must be at least the total allocated budget and cannot exceed 20,000.');
    }
  };

  const totalAllocatedBudget = () => {
    // Calculate the total allocated budget by summing up the expenses
    return remainingBudget + parseFloat(newBudget);
  };

  const handleCurrencyChange = (event) => {
    // Dispatch an action to update the currency in the state
    dispatch({ type: 'SET_CURRENCY', payload: event.target.value });
  };
  

  const handleBudgetSubmit = () => {
    // Dispatch an action to update the budget in the state
    dispatch({ type: 'SET_BUDGET', payload: parseFloat(newBudget) });
  };

  const displayError = (message) => {
    // Use window.alert to display an error popup
    window.alert(message);
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}{budget}</span>
      <button onClick={() => handleIncreaseDecrease(10)}>+</button>
      <button onClick={() => handleIncreaseDecrease(-10)}>-</button>

      {/* Add the currency prefix before the input */}
      <div className="currency-prefix">{currency}</div>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>

      <label htmlFor="currencyDropdown">Currency: </label>
      <select
  id="currencyDropdown"
  value={currency}  // Change here
  onChange={handleCurrencyChange}
  style={{
    backgroundColor: 'lightgreen',
    color: 'black',
    cursor: 'pointer',
  }}
>
  <option value="£">Pound (£)</option>
  <option value="$">Dollar ($)</option>
  <option value="€">Euro (€)</option>
  <option value="₹">Rupee (₹)</option>
</select>

      <button onClick={handleBudgetSubmit}>Submit</button>
    </div>
  );
};

export default Budget;

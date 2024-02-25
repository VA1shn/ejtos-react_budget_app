import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.name,
    });
  };

  const increaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: -10,
    };

    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          onClick={increaseAllocation}
          style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px' }}
        >
          +
        </button>
        <button
          onClick={decreaseAllocation}
          style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', marginLeft: '5px' }}
        >
          -
        </button>
      </td>
      <td><TiDelete size='3em' onClick={handleDeleteExpense} /></td>
    </tr>
  );
};

export default ExpenseItem;

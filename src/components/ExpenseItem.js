import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import increaseIcon from 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-green-plus-sign-simple-logo-image_1082145.jpg'; // Replace with your image path
import decreaseIcon from 'https://png.pngtree.com/png-clipart/20190921/original/pngtree-red-sing-stop-and-warning-symbol-vector-isolate-on-white-png-image_4723239.jpg'; // Replace with your image path

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.name,
    });
  };

  const modifyAllocation = (amount) => {
    const expense = {
      name: props.name,
      cost: amount,
    };

    dispatch({
      type: amount > 0 ? 'ADD_EXPENSE' : 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button onClick={() => modifyAllocation(10)}>
          <img src={increaseIcon} alt="Increase" style={{ width: '20px', height: '20px' }} />
        </button>
        <button onClick={() => modifyAllocation(-10)}>
          <img src={decreaseIcon} alt="Decrease" style={{ width: '20px', height: '20px' }} />
        </button>
      </td>
      <td><TiDelete size='2em' onClick={handleDeleteExpense} /></td>
    </tr>
  );
};

export default ExpenseItem;

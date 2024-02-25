import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase/Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
            currency= '$'  // Pass the currency symbol here
          />
        ))}
        </table>
    );
};

export default ExpenseList;

import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    // Korjataan 'lenght' -> 'length'
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

  return <ul className="Expenses-list" >
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
   </ul>

};

export default ExpensesList;

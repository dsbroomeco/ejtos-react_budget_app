import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The value cannot exceed 20000");
            return;
        } else if (event.target.value > expenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        } 
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input maxLength="6" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        if(false) {
            setNewCurrency("£");
        } else {
            setNewCurrency(event.target.value);
        }
        dispatch({
            type:'CHG_CURRENCY',
            payload: newCurrency
        });
    }
    
    
    return (
        <div className="alert">
           <select class="currency-select" onChange={handleCurrencyChange}>
                <option value="default" selected disabled hidden>Currency ({currency})</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
           </select>
        </div>
    );
};
export default Currency;
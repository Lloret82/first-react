import React, { useState } from "react"
import './ExpenseForm.css';


const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [eneteredAmount, setEnteredAmount] = useState('')
    const [eneteredDate, setEnteredDate] = useState('')

    const TitleChangeHandler = (event) => { 
        setEnteredTitle(event.target.value) 
    }
    
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)}

    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)}
return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={TitleChangeHandler} />
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler} />
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler} />


            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)}

export default ExpenseForm
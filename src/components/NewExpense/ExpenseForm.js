import React, { useState } from "react"
import './NewExpense.css'
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

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData= {
            title: enteredTitle,
            amount: eneteredAmount,
            date: new Date(eneteredDate)
    }
    console.log(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
}
return (
    <form onSubmit={submitHandler}>
        <div className="new-expense-controls">
            <div className="new-expense-control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={TitleChangeHandler} />
                <label>Amount</label>
                <input type='number' value={eneteredAmount} min='0.01' step='0.01' onChange={AmountChangeHandler} />
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={eneteredDate} onChange={DateChangeHandler} />


            </div>
        </div>
        <div className="new-expense-action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)}

export default ExpenseForm
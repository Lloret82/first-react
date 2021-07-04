import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>03 July 2021</div>
      <div className="expense-item__description">
        <h2>Insurance</h2>
        <div className="expense-item__price">294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

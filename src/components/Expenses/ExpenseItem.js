import React from 'react';
import'./ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/Card';
function ExpenseItem(props){
   
    return (
        
            
<Card className="expense-item">
<ExpenseDate date={props.date}/>
<div className="expense-item__description">
<ExpenseTitle title={props.title}/>
<div className='expense-item__price'>
<ExpenseAmount amount= { props.amount}/>
 </div>

</div>
</Card>





    )

}
export default ExpenseItem;
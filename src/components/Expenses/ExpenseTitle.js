import React from 'react';

function ExpenseTitle(props){
    const title=props.title;
    return (
<div>
    <h3>{props.title}</h3>
</div>

    )
}
export default ExpenseTitle;
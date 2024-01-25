// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

function App() {
 const expenses =[
{ id:'e1',
  title:'car insurance',
  date: new Date(2021, 3, 12) ,
  amount: 236

},
{ id:'e2',
  title:'school fess',
  date: new Date(2020, 6 , 3) ,
  amount: 540

},
{ id:'e3',
  title:'food',
  date: new Date(2019, 3 , 9) ,
  amount: 250

},
{ id:'e4',
  title:'meals',
  date: new Date(2032, 3 , 12) ,
  amount: 540

},


 ]
  return (
    <div>

    <h3>let's get started</h3>;
    <Expenses title={expenses}/>

    </div>
  )
}

export default App;

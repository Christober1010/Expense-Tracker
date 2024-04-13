import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import AddTransaction from './Components/AddTransaction';
import { useState } from 'react';
import { UserProvider } from './Context/Context';


function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [balance,setBalance]=useState(0);

  const [data,setData] = useState([
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    
  ])

  return (
    <UserProvider value={data}>
      <div className={darkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className={`darktheme btn ${darkTheme ? "btn-outline-light" : "btn-dark"}`}>
          <i className={`${darkTheme ? 'fa fa-lightbulb-o' : 'fa fa-moon-o'}`}></i>
        </button>
        <Header />
        <div className='outer'>
          <AddTransaction darkTheme={darkTheme} setBalance={setBalance} balance={balance} setData={setData}/>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;

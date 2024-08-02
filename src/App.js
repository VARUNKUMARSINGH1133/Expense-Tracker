import './App.css';
import Balance from './components/Balance'
import Header from './components/header'
import Expenses from './components/Expenses'
import History from './components/History'
import AddTransaction from './components/New'
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
    </div>
    <div className="inc-exp-container">
      <Expenses/>
    </div>
    <History/>
    <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;

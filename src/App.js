import logo from './images/logo.svg';
import './scss/main.scss';
import './App.scss';

import Bill from './components/Bill/Bill';
import SelectTip from './components/SelectTip/SelectTip';
import NumberPeople from './components/NumberPeople/NumberPeople';
import TotalAmount from './components/TotalAmount/TotalAmount';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div className='App-container'>
        <div className='App-inputs'>
          <Bill />
          <SelectTip />
          <NumberPeople />
        </div>
        <div className='App-totals'>
          <TotalAmount />
        </div>
      </div>
    </div>
  );
}

export default App;

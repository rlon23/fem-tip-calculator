import logo from './images/logo.svg';
import './scss/main.scss';
import './App.scss';

import Bill from './components/Bill/Bill';
import SelectTip from './components/SelectTip/SelectTip';
import NumberPeople from './components/NumberPeople/NumberPeople';
import TotalAmount from './components/TotalAmount/TotalAmount';

function App() {
  return (
    <main className='App'>
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
      <div class='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://github.com/rlon23' target='_blank' rel='noreferrer'>
          Arlony Diaz
        </a>
        .
      </div>
    </main>
  );
}

export default App;

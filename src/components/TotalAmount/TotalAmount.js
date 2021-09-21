import React from 'react';
import { useGlobalContext } from '../../context';
import './TotalAmount.scss';

function TotalAmount() {
  const {
    tipAmount,
    total,
    setBillValue,
    setTipPercentage,
    setPeople,
    handleReset,
    reset,
  } = useGlobalContext();

  return (
    <section className='TotalAmount'>
      <div className='amounts'>
        <div className='tip-amount'>
          Tip Amount <br />
          <span className='person'>/person</span>
        </div>
        <span className='value'>${tipAmount.toFixed(2)}</span>
      </div>

      <div className='amounts'>
        <div className='total-amount'>
          Total <br />
          <span className='person'>/person</span>
        </div>
        <span className='value'>${total.toFixed(2)}</span>
      </div>
      <button
        className={`${reset ? 'reset-btn' : 'reset-btn disabled'}`}
        type='reset'
        value='Reset'
        onClick={() => {
          setBillValue(0);
          setTipPercentage(5);
          setPeople(2);
          handleReset();
        }}
      >
        reset
      </button>
    </section>
  );
}
export default TotalAmount;

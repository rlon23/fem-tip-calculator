import React from 'react';
import './SelectTip.scss';
import { useGlobalContext } from '../../context';

function SelectTip() {
  const { handleSubmit, tipPercentage, setTipPercentage, tipValues } =
    useGlobalContext();

  return (
    <section className='SelectTip'>
      <h3 className='SelectTip-label'>Select tip %</h3>
      <div className='SelectTip-container'>
        {tipValues.map((val) => {
          return (
            <button
              key={val}
              onClick={() => {
                setTipPercentage(val);
              }}
              className={`SelectTip-btn ${
                val === tipPercentage && 'active-btn'
              }`}
            >
              {`${val}%`}
            </button>
          );
        })}
        <form className='SelectTip-form' onSubmit={handleSubmit}>
          <input
            type='number'
            name='custom'
            id='custom'
            min='1'
            placeholder='Custom'
            onChange={(e) => {
              setTipPercentage(parseInt(e.target.value));
            }}
          />
        </form>
      </div>
    </section>
  );
}

export default SelectTip;

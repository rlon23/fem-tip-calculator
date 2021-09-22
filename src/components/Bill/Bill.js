import React from 'react';
import './Bill.scss';
import { useGlobalContext } from '../../context';

function Bill() {
  const { setBillValue, handleSubmit, setReset } = useGlobalContext();

  return (
    <section className='Bill'>
      <form className='Bill-form' onSubmit={handleSubmit}>
        <label htmlFor='bill' className='Bill-label'>
          Bill
        </label>
        <input
          className='input'
          type='number'
          name='bill'
          id='bill'
          min='0'
          step='0.01'
          placeholder='0'
          required
          onChange={(e) => {
            setBillValue(Math.abs(parseFloat(e.target.value)));
            setReset(true);
          }}
        />
      </form>
    </section>
  );
}

export default Bill;

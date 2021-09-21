import React from 'react';
import './Bill.scss';
import { useGlobalContext } from '../../context';

function Bill() {
  const { setBillValue, handleSubmit } = useGlobalContext();

  return (
    <section className='Bill section'>
      <form className='Bill-form' onSubmit={handleSubmit}>
        <label htmlFor='bill' className='Bill-label'>
          Bill
        </label>
        <input
          type='number'
          name='bill'
          id='bill'
          min='0'
          step='0.01'
          placeholder='0'
          required
          onChange={(e) => setBillValue(parseFloat(e.target.value))}
        />
      </form>
    </section>
  );
}

export default Bill;

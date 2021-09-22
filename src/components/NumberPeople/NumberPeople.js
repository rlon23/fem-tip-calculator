import React from 'react';
import './NumberPeople.scss';
import { useGlobalContext } from '../../context';

function NumberPeople() {
  const { setPeople, handleSubmit } = useGlobalContext();

  return (
    <section className='NumberPeople'>
      <form className='NumberPeople-form' onSubmit={handleSubmit}>
        <label htmlFor='people' className='NumberPeople-label'>
          Number of People
        </label>
        <input
          className='input'
          type='number'
          name='people'
          id='people'
          min='1'
          placeholder='0'
          required
          onChange={(e) => setPeople(Math.abs(parseInt(e.target.value)))}
        />
      </form>
    </section>
  );
}

export default NumberPeople;

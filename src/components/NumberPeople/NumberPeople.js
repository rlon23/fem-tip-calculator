import React from 'react';
import './NumberPeople.scss';
import { useGlobalContext } from '../../context';

function NumberPeople() {
  const { setPeople, handleSubmit, setReset, people, reset } =
    useGlobalContext();

  return (
    <section className='NumberPeople'>
      <form
        className={`${
          people === 0 ? 'NumberPeople-form warning' : 'NumberPeople-form'
        }`}
        onSubmit={handleSubmit}
      >
        <div className='NumberPeople-labels'>
          <label htmlFor='people' className='NumberPeople-label'>
            Number of People
          </label>

          <label
            htmlFor='people'
            className={`${
              (people === 0 && reset) || (isNaN(people) && reset)
                ? 'NumberPeople-label helper warning'
                : 'NumberPeople-label helper'
            }`}
          >
            Can't be zero
          </label>
        </div>
        <input
          className={`${
            (people === 0 && reset) || (isNaN(people) && reset)
              ? 'input warning'
              : 'input'
          }`}
          type='number'
          name='people'
          id='people'
          min='1'
          placeholder='0'
          required
          onChange={(e) => {
            setPeople(Math.abs(parseInt(e.target.value)));
            setReset(true);
          }}
        />
      </form>
    </section>
  );
}

export default NumberPeople;

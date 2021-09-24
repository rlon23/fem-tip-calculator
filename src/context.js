import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const tipValues = [5, 10, 15, 25, 50];
  const [billValue, setBillValue] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    setReset(false);
  }

  useEffect(() => {
    if (
      billValue !== 0 &&
      !isNaN(billValue) &&
      people !== 0 &&
      !isNaN(people) &&
      !isNaN(tipPercentage)
    ) {
      setTipAmount(() => {
        let tip = (billValue * (tipPercentage / 100)) / people;
        return parseFloat(tip.toFixed(2));
      });

      setTotal(() => {
        let total = billValue / people + tipAmount;
        return parseFloat(total.toFixed(2));
      });
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [billValue, tipPercentage, people, tipAmount]);

  return (
    <AppContext.Provider
      value={{
        tipValues,
        billValue,
        setBillValue,
        tipPercentage,
        setTipPercentage,
        handleSubmit,
        people,
        setPeople,
        tipAmount,
        total,
        handleReset,
        reset,
        setReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

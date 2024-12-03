import React, { createContext, useContext, useState, useEffect } from 'react';

const BrokerContext = createContext();

export const BrokerProvider = ({ children }) => {
  const [brokerData, setBrokerData] = useState(null);

  // Load broker data from localStorage when the app starts
  useEffect(() => {
    const savedBrokerData = localStorage.getItem('brokerData');
    console.log('local savedBrokerData', savedBrokerData);
    
    if (savedBrokerData) {
      setBrokerData(JSON.parse(savedBrokerData));
    }
  }, []);

  // Save broker data to localStorage whenever it changes
  const updateBrokerData = (data) => {
    setBrokerData(data);
    localStorage.setItem('brokerData', JSON.stringify(data));
  };

  return (
    <BrokerContext.Provider value={{ brokerData, updateBrokerData }}>
      {children}
    </BrokerContext.Provider>
  );
};

export const useBroker = () => useContext(BrokerContext);

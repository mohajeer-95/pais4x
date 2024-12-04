// context/RtlContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const RtlContext = createContext();

export const RtlProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(true); // Default value
  const [language, setLanguage] = useState('ar'); // Default Arabic for RTL

  useEffect(() => {
    // Load from localStorage
    const storedDir = localStorage.getItem('isRTL');
    if (storedDir !== null) {
      const parsedDir = JSON.parse(storedDir);
      setIsRTL(parsedDir);
      setLanguage(parsedDir ? 'ar' : 'en');
      document.dir = parsedDir ? 'rtl' : 'ltr';
    } else {
      document.dir = 'rtl'; // Default
    }
  }, []);

  const toggleDirection = () => {
    setIsRTL((prev) => {
      const newDir = !prev;
      document.dir = newDir ? 'rtl' : 'ltr';
      localStorage.setItem('isRTL', JSON.stringify(newDir));
      setLanguage(newDir ? 'ar' : 'en');
      return newDir;
    });
  };

  return (
    <RtlContext.Provider value={{ isRTL, language, toggleDirection }}>
      {children}
    </RtlContext.Provider>
  );
};

export const useRtl = () => useContext(RtlContext);

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  // Function to fetch advice
  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const { advice } = response.data.slip;
      setAdvice(advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  // Fetch advice on component mount
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;

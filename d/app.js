import React, { useState } from 'react';
import './App.css'; // Optional for custom styles

const ProgressBar = () => {
  const [filled, setFilled] = useState(false);

  // Trigger animation on mount
  React.useEffect(() => {
    const timeout = setTimeout(() => setFilled(true), 10); // small delay to allow transition
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="progress-wrapper">
      <div className={`progress-bar ${filled ? 'filled' : ''}`}></div>
    </div>
  );
};

function App() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    setBars(prev => [...prev, Date.now()]); // use timestamp as unique key
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <button onClick={addProgressBar}>Add</button>
      <div className="bar-container" style={{ marginTop: '20px' }}>
        {bars.map((key) => (
          <ProgressBar key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;

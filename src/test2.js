import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [count, setCount] = useState(0);
    
    const handleChange = () => {
        setCount(count + 1);
    }
    
    return (
      <div>
        <p id="counter"{count}></p>
        <button onClick={handleChange}>Increment</button>
      </div>
    );
}

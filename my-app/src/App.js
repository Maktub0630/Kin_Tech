import React from 'react';
import './App.css';
import Counter from './Counter';
import findLargestNumber from './findLargestNumber';
import UserList from './UserList';

function App() {
  const numbers = [5, 12, 8, 130, 134];
  const largest = findLargestNumber(numbers);

  return (
    <div className="App">
      <div className="section">
        <h2>1. Largest Number</h2>
        <p>Numbers: {numbers.join(', ')}</p>
        <p>Largest number is: {largest}</p>
      </div>
      <div className="section">
        <h2>3. Counter Component</h2>
        <Counter />
      </div>


      <div className="section">
        <h2>4. User List</h2>
        <UserList />
      </div>
    </div>
  );
}

export default App;
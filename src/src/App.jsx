import React, { useState } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [ascending, setAscending] = useState(true);

  const handleAdd = () => {
    if (count > 0) {
      setList(prev => (prev.includes(count) ? prev : [...prev, count]));
      setCount(0);
    }
  };

  const handleSortToggle = () => {
    setAscending(prev => !prev);
  };

  const sortedList = [...list].sort((a, b) => ascending ? a - b : b - a);

  return (
    <div style={{ padding: 20 }}>
      <Counter count={count} setCount={setCount} handleAdd={handleAdd} />
      <button onClick={handleSortToggle}>
        Sort ({ascending ? 'Asc' : 'Desc'})
      </button>
      <ListView list={sortedList} />
    </div>
  );
}

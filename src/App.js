import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
      {/* 주석이다주석 */}
      <Hello 
        // self closing 주석은 이렇게 사용
      />
      <div style={style}>{name}</div>
      {/* css적용 시 class가 아닌 className사용 */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;

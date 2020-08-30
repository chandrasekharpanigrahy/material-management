import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="text" placeholder="Enter material name"/>
          <button>
            Add Material
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;

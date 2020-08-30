import React from 'react';
import './App.css';

class App extends React.Component{
  state = {materialName: ''};
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={this.addMaterial}>
              <input type="text" placeholder="Enter material name" value={this.state.materialName}/>
              <button>
                Add Material
              </button>
            </form>
          </header>
        </div>
    );
  }

  addMaterial(){

  }
}

export default App;

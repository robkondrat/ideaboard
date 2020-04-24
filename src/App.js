import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
        <IdeasContainer />
      </div>
    );
  }
}

export default App;

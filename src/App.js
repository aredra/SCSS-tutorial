import React from 'react';
import Button from './component/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size="large" color="gray">Button</Button>
        <Button color="gray">Button</Button>
        <Button size="small" color="gray">Button</Button>
      </div>
      <div className="Buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="Buttons">
        <Button size="large" color="pink">Button</Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">Button</Button>
      </div>
      <div className="Buttons">
        <Button size="large" color="gray" outline>Button</Button>
        <Button outline>Button</Button>
        <Button size="small" color="pink" outline>Button</Button>
      </div>
      <div className="Buttons">
        <Button 
          size="large"
          color="gray" 
          fullWidth
          onClick={() => {
            console.log("click event!!");
          }}
          onMouseMove={() => {
            console.log("mouse over event??");
          }}
          className="customized-button"
        >
          Button
        </Button>
        <Button size="large" color="blue" fullWidth>Button</Button>
        <Button size="large" color="pink" fullWidth>Button</Button>
      </div>
    </div>
  );
}

export default App;

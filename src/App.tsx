import React from 'react';
import styledComponents from 'styled-components';

const Button = styledComponents.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;


function App() {
  return (
    <div>
      <Button>I am a Button</Button>
    </div>
  );
}

export default App;

import React from 'react';

import './index.css';

import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React app</h1>
      <ExampleComponent />
    </div>
  );
};

export default App;

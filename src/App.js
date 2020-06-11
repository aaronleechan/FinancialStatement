import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StoreProvider} from './store/store'
import Components from '../src/components';

function App() {
  return (
    <StoreProvider>
      <Components/>
    </StoreProvider>
  );
}

export default App;

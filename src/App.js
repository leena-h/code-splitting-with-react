import React, { lazy, Suspense } from 'react';
import { useState } from 'react';


import './App.css';
import logo from './logo.svg'

function App() {
  const [route, setRoute] = useState('page1')
 
  const Page1 = lazy(() => import('./components/Page1'));
  const Page2 = lazy(() => import('./components/Page2'));
  const Page3 = lazy(() => import('./components/Page3'));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<div>Loading...</div>}>
          {route === 'page1' && <Page1 onRouteChange={setRoute} />}
          {route === 'page2' && <Page2 onRouteChange={setRoute} />}
          {route === 'page3' && <Page3 onRouteChange={setRoute} />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;

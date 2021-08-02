import React from 'react';

const Page1 = ({onRouteChange}) => {
  return (
    <>
      <h1 className="App Title">Page 1</h1>
      <button className="disabled">Page 1</button>
      <button onClick={() => onRouteChange('page2')}>Page 2</button>
      <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </>
  )
}

export default Page1;
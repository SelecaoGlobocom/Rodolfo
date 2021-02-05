import React from 'react';
import { Card } from './components/Card/index'

function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap" }}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;

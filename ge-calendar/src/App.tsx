import React from 'react';

import { Card } from './components/Card/index';
import { Container } from './components/Container';

function App() {
  return (
    <Container>
      <Container isCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Container>
  );
}

export default App;

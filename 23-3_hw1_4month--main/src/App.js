import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CenteredContent from './components/CenteredContent';
import Text from './components/Text';
import Button from './components/Button'
function App() {
  return (
    <div className="App">
      <Header />
      <CenteredContent>
        <Text />
        <Button />
      </CenteredContent>
      <Footer />

    </div>
  );
}

export default App;

import React from 'react';
import Header from "./components/Header";
import Filter from "./components/Filter";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="App">
        <Header />
        <Filter />
        <Container />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import AdviceButton from './components/AdviceButton';
import AdviceList from './components/AdviceList';
import { appStyles } from './styles';

const suggestions = [
  "Bere di più",
  "Fare esercizio",
  "Dormire almeno 8 ore",
  "Leggere un libro",
  "Pianificare un viaggio",
  "Mangiare sano"
];

function App() {
  const [shownAdvices, setShownAdvices] = useState([]);

  const handleShowAdvice = () => {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    if (shownAdvices.includes(random)) {
      alert(`${random} è già nella lista`);
    } else {
      setShownAdvices([...shownAdvices, random]);
    }
  };

  return (
    <div style={appStyles.container}>
      <h1>Consiglio del giorno</h1>
      <AdviceButton onClick={handleShowAdvice} />
      <AdviceList advices={shownAdvices} />
    </div>
  );
}

export default App;

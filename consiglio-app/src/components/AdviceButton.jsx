import React from 'react';
import { buttonStyles } from '../styles';

function AdviceButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyles.button}>
      Oggi proverò a
    </button>
  );
}

export default AdviceButton;

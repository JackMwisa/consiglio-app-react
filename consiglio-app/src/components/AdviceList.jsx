import React from 'react';
import { listStyles } from '../styles';

function AdviceList({ advices }) {
  return (
    <ul style={listStyles.list}>
      {advices.map((advice, index) => (
        <li key={index}>{advice}</li>
      ))}
    </ul>
  );
}

export default AdviceList;

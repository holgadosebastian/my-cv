import React, { Fragment, useEffect, useState } from 'react'
import './tailwind.output.css';

import { CoverLetter } from './CoverLetter';
import { Resume } from './Resume';

function App() {
  const [view, setView] = useState('resume');

  useEffect(() => {
    console.log('asd');
    window.setView = setView;
  }, []);
  
  if (view === 'cover-letter') return <CoverLetter />

  return <Resume />;
}

export default App;

import React from 'react';
import Dashboard from './components/Dashboard';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      {/* O CssBaseline remove as margens padrão do navegador e aplica o estilo do Material UI */}
      <CssBaseline />
      <Dashboard />
    </>
  );
}

export default App;
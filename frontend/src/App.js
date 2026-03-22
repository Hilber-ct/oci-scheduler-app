import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// IMPORTANDO SEUS COMPONENTES
import AgendamentoForm from './components/AgendamentoForm';
import ListaAgendamentos from './components/ListaAgendamentos';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff7900' }, // Laranja característico da Oracle Cloud
    background: { default: '#121212', paper: '#1e1e1e' }
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #121212;
`;

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  // Função que será chamada pelo Form para avisar a Lista que há um novo item
  const handleTaskCreated = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppContainer>
        <Container maxWidth="md">
          <Box textAlign="center" py={5}>
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
              OCI Scheduler
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Painel de Automação de Instâncias
            </Typography>
          </Box>

          {/* Componente de Inserção */}
          <AgendamentoForm onTaskCreated={handleTaskCreated} />
          
          <Box mt={4}>
            {/* Componente de Listagem que atualiza via refreshKey */}
            <ListaAgendamentos refreshKey={refreshKey} />
          </Box>
        </Container>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
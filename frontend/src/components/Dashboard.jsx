import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Paper } from '@mui/material';
// Aqui você importaria os outros componentes menores
// import SchedulerForm from './SchedulerForm';
// import SchedulerTable from './SchedulerTable';

const StyledDashboard = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const HeaderSection = styled.header`
  margin-bottom: 30px;
  border-bottom: 2px solid #1976d2;
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Container maxWidth="lg">
        <HeaderSection>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            OCI Manager Equals
          </Typography>
        </HeaderSection>

        {/* Opção 1: Cadastro */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
           <Typography variant="h6">Cadastro de VMs Staging</Typography>
           <Typography variant="body2" color="textSecondary">
             Cadastre novas VMs para agendar start/stop (necessário hostname e OCID).
           </Typography>
           {/* <SchedulerForm /> */}
        </Paper>

        {/* Opção 2: Scheduler */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}> {/* Adicionei mb: 4 aqui para separar da terceira */}
           <Typography variant="h6">Scheduler</Typography>
           <Typography variant="body2" color="textSecondary">
             Agendador.
           </Typography>
           {/* <SchedulerTable /> */}
        </Paper>

        {/* Opção 3: Nova Seção (Ex: Logs de Atividade) */}
        <Paper elevation={3} sx={{ p: 3 }}>
           <Typography variant="h6">VMs Ligadas</Typography>
           <Typography variant="body2" color="textSecondary">
             Máquinas constantemente ligadas.
           </Typography>
           {/* <ActivityLogs /> */}
        </Paper>
        
      </Container>
    </StyledDashboard>
  );
};

export default Dashboard;
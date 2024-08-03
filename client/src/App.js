import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LeakageFormTabs from './components/LeakageFormTabs';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LeakageFormTabs />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // นำเข้า Router
import Header from './components/Header';
import Mainpage from './components/Mainpage';
import SignInAdmin from './components/SignInAdmin';
import Dashboard from './components/Dashboard';
import Next1 from './components/Next1';
import NextFace from './components/NextFace';
import NextAge from './components/NextAge';

import { ThemeProvider, createTheme } from '@mui/material/styles';


const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/mainpage" />} /> 
          <Route exact path='/mainpage' element={<Mainpage />} />
          <Route exact path='/SignInAdmin' element={<SignInAdmin />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/Next1' element={<Next1/>}/>
          <Route exact path='/NextFace' element={<NextFace/>}/>
          <Route exact path='/NextAge' element={<NextAge/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

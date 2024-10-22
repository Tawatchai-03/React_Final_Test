import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // นำเข้า Router
import Header from './components/Header';
import Mainpage from './components/Mainpage';
import SignInAdmin from './components/SigninAdmin';
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
          <Route path="/" element={<Mainpage />} /> {/* กำหนดเส้นทางหลัก */}
          <Route path='/SignInAdmin' element={<SignInAdmin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

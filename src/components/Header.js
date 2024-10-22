import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

export default function Header() {
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง

  const handleSignInClick = () => {
    navigate('/SigninAdmin'); // เปลี่ยนเส้นทางไปที่ /signin-admin
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#000', // สีตัวหนังสือเป็นสีดำ
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
              fontFamily: '"Courier New", Courier, monospace',
            }}
          >
            whoareyou
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#fff', // ให้สีตัวหนังสือในปุ่มเป็นสีขาว
            }}
            onClick={handleSignInClick} // เพิ่ม onClick ที่ปุ่ม
          >
            เข้าสู่ระบบ
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

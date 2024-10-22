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
              backgroundColor: '#FEFFDA',
              borderRadius: '10px',
              border: '1px solid #000',
              color: '#000', // ให้สีตัวหนังสือในปุ่มเป็นสีดำ
              '&:hover': {
                backgroundColor: '#f5f5a0', // เปลี่ยนสีเมื่อชี้เมาส์
              },
            }}
            onClick={handleSignInClick} // เพิ่ม onClick ที่ปุ่ม
            aria-label="เข้าสู่ระบบ" // เพิ่ม aria-label สำหรับการเข้าถึง
>
            เข้าสู่ระบบ
</Button>
</Toolbar>
</AppBar>
</Box>
  );
}

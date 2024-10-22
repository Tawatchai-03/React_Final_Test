import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import webbg from './image/webbg.png';

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
});

export default function ImageComparisonPage() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${webbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 16px',
        }}
      >
        {/* กล่องสำหรับชื่อและรูปภาพ */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: { xs: 2, md: 4 }, // ปรับระยะห่างให้เข้ากับขนาดหน้าจอ
            mb: 4, 
            flexWrap: 'wrap' 
          }}
        >
          {/* ชื่อและรูปภาพคนแรก */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              คุณ
            </Typography>
            <Box
              sx={{
                width: { xs: '250px', md: '400px' }, // ปรับขนาดรูปภาพตามขนาดหน้าจอ
                height: { xs: '250px', md: '400px' },
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <img
                src="/path/to/your/image1.png"
                alt="person 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>

          {/* ข้อความความเหมือนที่อยู่ระหว่างรูปภาพ */}
          <Box sx={{ textAlign: 'center', mx: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              ความเหมือน
            </Typography>
            <Typography variant="h3" sx={{ color: 'red', fontWeight: 'bold' }}>
              00%
            </Typography>
          </Box>

          {/* ชื่อและรูปภาพคนที่สอง */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              รูปดารา
            </Typography>
            <Box
              sx={{
                width: { xs: '250px', md: '400px' }, // ปรับขนาดรูปภาพตามขนาดหน้าจอ
                height: { xs: '250px', md: '400px' },
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <img
                src="/path/to/your/image2.png"
                alt="person 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* ปุ่มย้อนกลับ */}
        <Box sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            sx={{
              border: '1px solid #000', 
              borderRadius: '16px', 
              padding: '10px',
              width: '100%',
              maxWidth: { xs: '150px', md: '200px' }, // ปรับขนาดปุ่มตามขนาดหน้าจอ
              height: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#FEFFDA',
              color: 'black',
              '&:hover': {
                backgroundColor: '#ffd996',
              },
            }}
            onClick={() => navigate(-1)}
          >
            ย้อนกลับ
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

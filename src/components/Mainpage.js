import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, Button } from '@mui/material';

export default function Minipage() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="div" gutterBottom>
          ระบบอัปโหลดรูปภาพ
        </Typography>

        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              อัปโหลดรูปภาพ
            </Typography>
            <input type="file" onChange={handleImageChange} style={{ marginTop: '10px', marginBottom: '10px' }} />

            {imagePreviewUrl && (
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
              </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="contained" color="primary">
                ถัดไป
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

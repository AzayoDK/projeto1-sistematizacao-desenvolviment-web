import * as React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" align="center" color="text.primary">
          Clínica Vitalis – Cuidando da sua saúde com responsabilidade e carinho.
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Clínica Vitalis. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 0.5 }}>
          Desenvolvido com 💙 por você!
        </Typography>
      </Container>
    </Box>
  );
}

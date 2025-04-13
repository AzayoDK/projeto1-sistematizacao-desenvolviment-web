import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 300); // só aparece se rolar mais de 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
      }}
    >
      <Fab
        color="primary"
        aria-label="voltar ao início"
        onClick={handleScrollToTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

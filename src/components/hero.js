import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

const farmaciaImages = [
  '/img/clinica/clinica1.jpg',
  '/img/clinica/clinica2.jpg',
  '/img/clinica/clinica3.jpg'
];

const SlideContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 400,
  overflow: 'hidden',
  marginTop: '2rem',
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(218, 40.00%, 3.90%, 0.20)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  [theme.breakpoints.up('sm')]: {
    height: 550,
  },
  [theme.breakpoints.up('md')]: {
    height: 600,
  }
}));

const SlideTrack = styled(Box)(({ transition, translateX }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  transform: `translateX(-${translateX}%)`,
  transition: transition ? 'transform 0.7s ease-in-out' : 'none',
}));

const SlideImage = styled(Box)(({ background }) => ({
  minWidth: '100%',
  height: '100%',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

export default function Hero() {
  const [index, setIndex] = React.useState(0);
  const [transition, setTransition] = React.useState(true);
  const totalImages = farmaciaImages.length;
  const timerRef = React.useRef(null); // Referência para o timer

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // reinicia o timer
  };

  const nextSlide = React.useCallback(() => {
    setTransition(true);
    setIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => (prev - 1 + totalImages) % totalImages);
    resetTimer();
  };

  const handleNext = () => {
    nextSlide();
    resetTimer();
  };

  React.useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles?.('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 10, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' }, mb: 4 }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Clínica&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: '#26a69a',
              }}
            >
              Vitalis
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Cuidando de você com dedicação, tecnologia e carinho. Aqui, sua saúde vem em primeiro lugar.
          </Typography>
        </Stack>

        <SlideContainer>
          <SlideTrack translateX={index * 100} transition={transition}>
            {farmaciaImages.map((img, i) => (
              <SlideImage key={i} background={img} />
            ))}
          </SlideTrack>

          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 10,
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 10,
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </SlideContainer>
      </Container>
    </Box>
  );
}

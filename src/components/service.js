import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MasksIcon from '@mui/icons-material/Masks';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CardMedia from '@mui/material/CardMedia';

const items = [
  {
    icon: <LocalHospitalIcon />,
    title: 'Consultas Médicas Especializadas',
    description:
      'Atendimento com especialistas experientes em diversas áreas da saúde, oferecendo diagnósticos precisos e acompanhamento personalizado.',
    imageLight: `/img/produtos/produto1.jpg`,
    imageDark: `/img/produtos/produto1.jpg`,
  },
  {
    icon: <VaccinesIcon />,
    title: 'Exames Laboratoriais',
    description:
      'Realize seus exames com agilidade e precisão. Resultados rápidos, com tecnologia moderna e equipe qualificada.',
    imageLight: `/img/produtos/produto2.jpg`,
    imageDark: `/img/produtos/produto2.jpg`,
  },
  {
    icon: <MasksIcon />,
    title: 'Check-up Preventivo',
    description:
      'Cuide da sua saúde com nossos pacotes de check-up. Prevenção é o melhor caminho para uma vida longa e saudável.',
    imageLight: `/img/produtos/produto3.jpg`,
    imageDark: `/img/produtos/produto3.jpg`,
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) return null;

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <CardMedia
          component="img"
          image={selectedFeature.imageLight}
          alt={selectedFeature.title}
          sx={{
            width: '100%',
            height: 280,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function Service() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Cuidando de você em cada detalhe
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Nossa missão é cuidar da sua saúde com excelência. Abaixo, você encontra os serviços que tornam isso possível — com tecnologia, agilidade e uma equipe dedicada.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={selectedFeature.imageLight}
              alt={selectedFeature.title}
              sx={{
                width: '100%',
                height: 500,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

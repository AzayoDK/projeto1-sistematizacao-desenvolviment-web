import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const tiers = [
  {
    title: 'Plano Popular',
    price: '59,90',
    description: [
      '1 consulta por mês com clínico geral',
      '10% de desconto em exames',
      'Acesso ao histórico médico online',
      'Medição gratuita de pressão e glicose',
      'Atendimento via WhatsApp (resposta em até 48h úteis)',
    ],
    buttonText: 'Escolher plano',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Plano Avançado',
    subheader: 'Popular',
    price: '129,90',
    description: [
      'Até 3 consultas mensais (clínico ou especialistas)',
      '5 exames laboratoriais por mês',
      'Agendamento com prioridade máxima',
      'Acesso completo ao prontuário online',
      'Suporte via WhatsApp e e-mail (resposta em até 24h úteis)',
      '1 Teleconsulta por mês',
    ],
    buttonText: 'Escolher plano',
    buttonVariant: 'contained',
    buttonColor: 'warning',
  },
  {
    title: 'Plano Premium',
    price: '249,90',
    description: [
      'Consultas ilimitadas (clínico + todas as especialidades disponíveis)',
      'Exames laboratoriais ilimitados (na clínica)',
      'Agendamento com prioridade máxima',
      'Suporte 24h (WhatsApp, telefone e e-mail)',
      'Teleconsultas ilimitadas',
    ],
    buttonText: 'Escolher plano',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Planos de Saúde Acessíveis
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Escolha o plano ideal para cuidar da sua saúde e da sua família com qualidade e economia.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => (
          <Grid
            size={{ xs: 12, sm: tier.title === 'Plano Premium' ? 12 : 6, md: 4 }}
            key={tier.title}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                tier.title === 'Plano Avançado' &&
                  ((theme) => ({
                    border: 'none',
                    background:
                      'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles('dark', {
                      background:
                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                    }),
                  })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                    tier.title === 'Plano Avançado'
                      ? { color: 'grey.100' }
                      : { color: '' },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Plano Avançado' && (
                    <Chip
                        icon={<AutoAwesomeIcon sx={{ color: 'gold !important' }} />}
                        label={tier.subheader}
                        sx={{
                        color: 'white',
                        backgroundColor: 'transparent',
                        border: '1px solid gold',
                        }}
                    />
                    )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                    tier.title === 'Plano Avançado'
                      ? { color: 'grey.50' }
                      : { color: null },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    R${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; /mês
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === 'Plano Avançado'
                          ? { color: 'primary.light' }
                          : { color: 'primary.main' },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[
                        tier.title === 'Plano Avançado'
                          ? { color: 'grey.50' }
                          : { color: null },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                {tier.title === 'Plano Avançado' ? (
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#f26c4f',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#d9563d',
                      },
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color={tier.buttonColor}
                  >
                    {tier.buttonText}
                  </Button>
                )}
              </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

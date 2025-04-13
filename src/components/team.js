import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Grid } from '@mui/material';

export default function Team() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 5,
        px: 2,
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{ color: 'text.primary' }}
      >
        Médicos
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 4 }}
      > 
        Cuidar da sua saúde é a nossa missão. Contamos com uma equipe de médicos clínicos comprometidos em <br /> oferecer atendimento de qualidade, com escuta atenta, orientação clara e atenção contínua à sua jornada de saúde.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {/** Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="560"
                image="/img/medicos/medico2.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dr. Pedro Henrique
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Clínico geral com foco em medicina preventiva e cuidados integrados.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/** Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="560"
                image="/img/medicos/medico1.jpg"
                alt="doctor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dra. Sofia Martins
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Clínica geral especializada em atendimento humanizado e saúde da mulher.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/** Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="560"
                image="/img/medicos/medico3.jpg"
                alt="clinic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dr. Ricardo Alves
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Clínico geral com experiência em diagnóstico rápido e acompanhamento familiar.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

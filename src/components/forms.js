import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function FormsContact() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={3}>
        <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{ color: 'text.primary' }}
      >
        Inscreva-se
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 4 }}
      > 
        Preencha o formulário abaixo e nossa equipe entrará em contato com você para entender suas necessidades e oferecer o plano ideal para sua saúde.
      </Typography>
        <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="first-name">
            Primeiro Nome
            </FormLabel>
            <OutlinedInput
            id="first-name"
            name="first-name"
            type="text"
            placeholder="João"
            autoComplete="first name"
            size="small"
            />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name">
            Útimo Nome
            </FormLabel>
            <OutlinedInput
            id="last-name"
            name="last-name"
            type="text"
            placeholder="Pedro"
            autoComplete="last name"
            size="small"
            />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="city">
            Cidade
            </FormLabel>
            <OutlinedInput
            id="city"
            name="city"
            type="text"
            placeholder="Nome da sua cidade"
            autoComplete="address-level2"
            size="small"
            />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6}}>
            <FormLabel htmlFor="state">
            Estado</FormLabel>
            <OutlinedInput
            id="state"
            name="state"
            type="text"
            placeholder="Nome do seu estado"
            autoComplete="address-level1"
            size="small"
            />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="email">
            Email
            </FormLabel>
            <OutlinedInput
            id="email"
            name="email"
            type="email"
            placeholder="email@email.com"
            autoComplete="email"
            size="small"
            />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                sx={{ mt: 2, alignSelf: 'flex-start' }}
            >
                Enviar
            </Button>
        </FormGrid>
        </Grid>
    </Container>
  );
}

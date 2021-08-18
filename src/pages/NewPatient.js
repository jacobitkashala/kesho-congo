import { Box, Typography, Grid } from '@material-ui/core';
import Page from '../components/Page';
import { FamilleForm } from '../components/_dashboard/patient';

export default function NewPatient() {
  return (
    <Page>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <FamilleForm />
        </Grid>
      </Grid>
    </Page>
  );
}

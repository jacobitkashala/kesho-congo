import * as Yup from 'yup';
import propTypes from 'prop-types';
// import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  // Box,
  // MenuItem,
  Stack,
  TextField,
  // Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  // InputLabel,
  Select,
  styled
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
CauseForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func
};

export default function CauseForm({ NextStep, SetDataPatient, PrevStep }) {
  const RegisterSchema = Yup.object().shape({
    lieu_accouchement: Yup.string().required(),
    TailleFratrie: Yup.number().required(),
    SejourNeo: Yup.string().required(),
    MasFratrie: Yup.string().required(),
    atcdMas: Yup.string().required(),
    AtcdRougeole: Yup.string().required(),
    TbcChezParent: Yup.string().required(),
    TbcLequel: Yup.string(),
    TbcTraiter: Yup.string(),
    Tdc: Yup.string().required(),
    hospitalisation_recente: Yup.string().required(),
    diagnostique_hospitalisation: Yup.string(),
    duree_traitement_tbc: Yup.string(),
    Termegrossesse: Yup.string().required(),
    CalendrierVaccin: Yup.string().required(),
    atcd_du_tbc_dans_fratrie: Yup.string().required('*'),
    PreciserCalendrierVaccinNonJour: Yup.string(),
    AsphyxiePrerinatale: Yup.string().required(),
    RangFratrie: Yup.string().required(),
    produitPlante: Yup.string().required(),
    TerrainVih: Yup.string().required(),
    NombreChute: Yup.number().positive().required(),
    VaccinatioRougeole: Yup.string().required(),
    Eig: Yup.number().required(),
    TbcGuerie: Yup.string(),
    Dpm: Yup.string().required(),
    cocktail_atb: Yup.string().required(),
    cocktail_atb_preci: Yup.string(),
    dureeProduitPlante: Yup.string(),
    DpmAnormalPrecision: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      // atcd_mas: '',
      RangFratrie: '',
      lieu_accouchement: '',
      SejourNeo: '',
      cocktail_atb_preci: '',
      cocktail_atb: '',
      atcdMas: '',
      AtcdRougeole: '',
      TbcChezParent: 'null',
      TbcLequel: '',
      TbcTraiter: 'null',
      duree_traitement_tbc: '0',
      TbcGuerie: 'null',
      Termegrossesse: '',
      CalendrierVaccin: '',
      PreciserCalendrierVaccinNonJour: 'null',
      AsphyxiePrerinatale: '',
      TailleFratrie: '0',
      MasFratrie: '',
      TerrainVih: '',
      NombreChute: '',
      VaccinatioRougeole: '',
      Eig: '',
      Dpm: '',
      produitPlante: 'null',
      hospitalisation_recente: '',
      diagnostique_hospitalisation: 'rien',
      atcd_du_tbc_dans_fratrie: '',
      DpmAnormalPrecision: 'DPM est Anormal parce que :',
      dureeProduitPlante: '0',
      remember: true
    },
    validationSchema: RegisterSchema,
    onSubmit: (CauseMalnutrition) => {
      SetDataPatient((current) => ({ ...current, CauseMalnutrition }));
      // SetCauseData(CauseMalnutrition);
      // console.log(CauseData);
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                native
                sx={{ padding: '2px' }}
                value={values.lieu_accouchement}
                error={Boolean(touched.lieu_accouchement && errors.lieu_accouchement)}
                {...getFieldProps('lieu_accouchement')}
              >
                <option value="" selected disabled hidden>
                  Lieu d'accouchement
                </option>
                <option value="Voiture">Voiture</option>
                <option value="domicile">domicile</option>
                <option value="Structure sanitaire oui">Structure sanitaire</option>
              </Select>
              <RadioGroup
                error={Boolean(touched.SejourNeo && errors.SejourNeo)}
                {...getFieldProps('SejourNeo')}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  error={Boolean(touched.SejourNeo && errors.SejourNeo)}
                  spacing={1}
                >
                  <FormLabel component="label">Séjour en néonat:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                label="EIG moyen (année)"
                {...getFieldProps('Eig')}
                error={Boolean(touched.Eig && errors.Eig)}
              />
              <TextField
                sx={{ padding: '2px' }}
                label="Rang dans la fratrie"
                required
                {...getFieldProps('RangFratrie')}
                error={Boolean(touched.RangFratrie && errors.RangFratrie)}
              />
              <RadioGroup
                {...getFieldProps('MasFratrie')}
                error={Boolean(touched.MasFratrie && errors.MasFratrie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">MAS dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup {...getFieldProps('Tdc')} error={Boolean(touched.Tdc && errors.Tdc)}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup
                {...getFieldProps('TbcChezParent')}
                error={Boolean(touched.TbcChezParent && errors.TbcChezParent)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label"> TBC chez les parents:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <Select
                native
                {...getFieldProps('TbcLequel')}
                error={Boolean(touched.TbcLequel && errors.TbcLequel)}
              >
                <option value="" selected disabled hidden>
                  Si TBC oui lequel
                </option>
                <option value="Père">Père</option>
                <option value="Mère">Mère</option>
                <option value="Les deux">Les deux</option>
              </Select>
              <RadioGroup
                {...getFieldProps('TbcTraiter')}
                error={Boolean(touched.TbcTraiter && errors.TbcTraiter)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC traitée :</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <RadioGroup
                {...getFieldProps('TbcGuerie')}
                error={Boolean(touched.TbcGuerie && errors.TbcGuerie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC déclarée guérie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Durée de traitement TBC"
                {...getFieldProps('duree_traitement_tbc')}
                error={Boolean(touched.duree_traitement_tbc && errors.duree_traitement_tbc)}
              />
              <RadioGroup
                sx={{ width: '80%' }}
                required
                {...getFieldProps('hospitalisation_recente')}
                error={Boolean(touched.hospitalisation_recente && errors.hospitalisation_recente)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Hospitalisation récente:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Diagnostic hopital"
                {...getFieldProps('diagnostique_hospitalisation')}
                error={Boolean(
                  touched.diagnostique_hospitalisation && errors.diagnostique_hospitalisation
                )}
              />
              <RadioGroup
                sx={{ width: '80%' }}
                {...getFieldProps('produitPlante')}
                error={Boolean(touched.produitPlante && errors.produitPlante)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Prise des produits à base des plantes:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ width: '80%', padding: '2px' }}
                fullWidth
                label="Si Oui veuillez précisez la durée"
                {...getFieldProps('dureeProduitPlante')}
                error={Boolean(touched.dureeProduitPlante && errors.dureeProduitPlante)}
              />
            </Stack>
            {/* </SubDivContenaire> */}
          </Grid>
          {/* <SubDivContenaire> */}
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                sx={{ width: '80%' }}
                native
                required
                {...getFieldProps('Termegrossesse')}
                error={Boolean(touched.Termegrossesse && errors.Termegrossesse)}
              >
                <option value="" selected disabled hidden>
                  Terme de la grossesse
                </option>
                <option value="Prématuré ">Prématuré</option>
                <option value="A terme">A terme</option>
              </Select>
              <Select
                sx={{ width: '80%' }}
                native
                {...getFieldProps('CalendrierVaccin')}
                required
                error={Boolean(touched.CalendrierVaccin && errors.CalendrierVaccin)}
              >
                <option value="" selected disabled hidden>
                  Calendrier vaccinal
                </option>
                <option value="Calendrier vaccinal à jour">Calendrier vaccinal à jour</option>
                <option value="Calendrier vaccinal non à jour">
                  Calendrier vaccinal non à jour
                </option>
              </Select>
              <TextField
                sx={{ width: '80%', padding: '2px' }}
                label="Si Calendrier vaccinal non à jour veuillez préciser le vaccin non recu ..."
                {...getFieldProps('PreciserCalendrierVaccinNonJour')}
                error={Boolean(
                  touched.PreciserCalendrierVaccinNonJour && errors.PreciserCalendrierVaccinNonJour
                )}
              />
              <RadioGroup
                sx={{ width: '80%' }}
                required
                {...getFieldProps('atcdMas')}
                error={Boolean(touched.atcdMas && errors.atcdMas)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de MAS:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                required
                sx={{ width: '80%' }}
                {...getFieldProps('Dpm')}
                error={Boolean(touched.Dpm && errors.Dpm)}
              >
                <option value="" selected disabled hidden>
                  DPM
                </option>
                <option value="Normal">Normal</option>
                <option value="Anormal">Anormal</option>
              </Select>
              <TextField
                sx={{ width: '80%', padding: '2px' }}
                label="Si DPM est anormal veuillez préciser"
                {...getFieldProps('DpmAnormalPrecision')}
                error={Boolean(touched.DpmAnormalPrecision && errors.DpmAnormalPrecision)}
              />
              <RadioGroup
                sx={{ width: '80%', padding: '2px' }}
                required
                {...getFieldProps('AtcdRougeole')}
                error={Boolean(touched.AtcdRougeole && errors.AtcdRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de Rougeole dans la fratrie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Taille de la fratrie"
                {...getFieldProps('TailleFratrie')}
                error={Boolean(touched.TailleFratrie && errors.TailleFratrie)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                fullWidth
                {...getFieldProps('TerrainVih')}
                required
                error={Boolean(touched.TerrainVih && errors.TerrainVih)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  error={Boolean(touched.TerrainVih && errors.TerrainVih)}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Terrain VIH connu:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                autoComplete="nbr"
                type="text"
                label="Nombre de chute"
                {...getFieldProps('NombreChute')}
                error={Boolean(touched.NombreChute && errors.NombreChute)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                fullWidth
                {...getFieldProps('VaccinatioRougeole')}
                error={Boolean(touched.VaccinatioRougeole && errors.VaccinatioRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Vaccination rougeole:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                fullWidth
                {...getFieldProps('AsphyxiePrerinatale')}
                error={Boolean(touched.AsphyxiePrerinatale && errors.AsphyxiePrerinatale)}
              >
                <option value="" selected disabled hidden>
                  Asphyxie périnatale
                </option>
                <option value="pas de cri">pas de cri</option>
                <option value="a crié spontanément oui">a crié spontanément</option>
                <option value="cri après réanimation">cri après réanimation</option>
              </Select>
              <RadioGroup
                sx={{ padding: '2px' }}
                fullWidth
                {...getFieldProps('cocktail_atb')}
                error={Boolean(touched.cocktail_atb && errors.cocktail_atb)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Notion de prise de cocktail d’ATB</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                type="text"
                label="Si notion de prise de cocktail est Oui, veuillez préciser la durée"
                {...getFieldProps('cocktail_atb_preci')}
                error={Boolean(touched.cocktail_atb_preci && errors.cocktail_atb_preci)}
              />
              <RadioGroup
                {...getFieldProps('atcd_du_tbc_dans_fratrie')}
                required
                error={Boolean(touched.atcd_du_tbc_dans_fratrie && errors.atcd_du_tbc_dans_fratrie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de TBC dans la fratrie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <LoadingButton
            size="large"
            type="button"
            variant="contained"
            onClick={() => {
              PrevStep();
            }}
            sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
          >
            Précédant
          </LoadingButton>
          <LoadingButton
            type="submit"
            size="large"
            variant="contained"
            loading={isSubmitting}
            sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
          >
            Suivant
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

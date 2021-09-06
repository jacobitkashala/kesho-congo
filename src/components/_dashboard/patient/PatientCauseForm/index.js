import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  // Box,
  // MenuItem,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  // Grid,
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

const Div = styled('div')(() => ({
  height: '90%',
  width: '150%',
  position: 'relative',
  borderRadius: '15px',
  paddingTop: '30px',
  paddingBottom: '80px',
  left: '50%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}));

const SubDiv = styled('div')(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}));
const SubDivContenaire = styled('div')(() => ({
  width: '50%',
  position: 'relative',
  left: '30%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export default function CauseForm({ NextStep, SetDataPatient, PrevStep }) {
  const [CauseData, SetCauseData] = useState({});

  const RegisterSchema = Yup.object().shape({
    PoidsNaissance: Yup.number(),
    LieuAccouchement: Yup.string(),
    SejourNeo: Yup.string(),
    MasFratrie: Yup.string(),
    MatcdMas: Yup.string(),
    AtcdRougeole: Yup.string(),
    TbcChezParent: Yup.string(),
    TbcLequel: Yup.string(),
    TbcTraiter: Yup.string(),
    Tdc: Yup.string(),
    Termegrossesse: Yup.string(),
    CalendrierVaccin: Yup.string(),
    PreciserCalendrierVaccinNonJour: Yup.string('Veuillez inserer quelque choses'),
    AsphyxiePrerinatale: Yup.string(),
    RangFratrie: Yup.string(),
    TerrainVih: Yup.string(),
    NombreChute: Yup.number().positive(),
    VaccinatioRougeole: Yup.string(),
    Eig: Yup.number(),
    TbcGuerie: Yup.string(),
    Dpm: Yup.string(),
    DpmAnormalPrecision: Yup.string('Veuillez inserer quelque choses')
  });

  const formik = useFormik({
    initialValues: {
      RangFratrie: '',
      PoidsNaissance: '',
      LieuAccouchement: '',
      SejourNeo: '',
      MatcdMas: '',
      AtcdRougeole: '',
      TbcChezParent: '',
      TbcLequel: '',
      TbcTraiter: '',
      Tdc: '',
      TbcGuerie: '',
      Termegrossesse: '',
      CalendrierVaccin: '',
      PreciserCalendrierVaccinNonJour: '',
      AsphyxiePrerinatale: '',
      TailleFratrie: '',
      TerrainVih: '',
      NombreChute: '',
      VaccinatioRougeole: '',
      Eig: '',
      Dpm: '',
      DpmAnormalPrecision: 'Anormal parce que :'
    },
    validationSchema: RegisterSchema,
    onSubmit: (CauseMalnutrition) => {
      SetDataPatient((current) => ({ ...current, CauseMalnutrition }));
      SetCauseData(CauseMalnutrition);
      // console.log(CauseData);
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  // console.log(errors);
  console.log(errors);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <Typography variant="h5" pb={4} sx={{ textAlign: 'center' }}>
            Cause Malnutrition
          </Typography>
          <SubDiv direction={{ xs: 'column', sm: 'row' }}>
            <SubDivContenaire>
              <Stack spacing={3}>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  value={values.LieuAccouchement}
                  error={Boolean(touched.LieuAccouchement && errors.LieuAccouchement)}
                  {...getFieldProps('LieuAccouchement')}
                >
                  <option value="" selected disabled hidden>
                    Lieu d'acchement patient
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
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                  <TextField
                    sx={{ width: '80%', padding: '2px' }}
                    label="EIG moyen (année)"
                    {...getFieldProps('Eig')}
                    error={Boolean(touched.Eig && errors.Eig)}
                  />
                  <RadioGroup
                    {...getFieldProps('MatcdMas')}
                    error={Boolean(touched.MatcdMas && errors.MatcdMas)}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      spacing={1}
                    >
                      <FormLabel component="label">MATCD de MAS:</FormLabel>
                      <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" />
                    </Stack>
                  </RadioGroup>
                  <TextField
                    sx={{ width: '80%', padding: '2px' }}
                    label="Rang dans la fratrie"
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
                      <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" />
                    </Stack>
                  </RadioGroup>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="text"
                  label="Poids de naissance(gr)"
                  value={values.PoidsNaissance}
                  {...getFieldProps('PoidsNaissance')}
                  error={Boolean(touched.PoidsNaissance && errors.PoidsNaissance)}
                />
                <Select
                  native
                  sx={{ width: '80%' }}
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
                  sx={{ width: '80%' }}
                  {...getFieldProps('Tdc')}
                  error={Boolean(touched.Tdc && errors.Tdc)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">TBC:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
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
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <Select
                  native
                  sx={{ width: '80%' }}
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
                  sx={{ width: '80%' }}
                  {...getFieldProps('TbcTraiter')}
                  error={Boolean(touched.TbcTraiter && errors.TbcTraiter)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">TBC traitée :</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <RadioGroup
                  sx={{ width: '80%' }}
                  {...getFieldProps('TbcGuerie')}
                  error={Boolean(touched.TbcGuerie && errors.TbcGuerie)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Tbc déclarée guérie:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <Select
                  sx={{ width: '80%' }}
                  native
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
                  error={Boolean(touched.CalendrierVaccin && errors.CalendrierVaccin)}
                >
                  <option value="" selected disabled hidden>
                    Calendrier vaccinal
                  </option>
                  <option value="A jour">A jour</option>
                  <option value="Non à jour">Non à jour</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si non à jour veuillez préciser le vaccin non recu ..."
                  {...getFieldProps('PreciserCalendrierVaccinNonJour')}
                  error={Boolean(
                    touched.PreciserCalendrierVaccinNonJour &&
                      errors.PreciserCalendrierVaccinNonJour
                  )}
                />
                <Select
                  native
                  sx={{ width: '80%' }}
                  {...getFieldProps('Dpm')}
                  error={Boolean(touched.Dpm && errors.Dpm)}
                >
                  <option value="" selected disabled hidden>
                    DPM
                  </option>
                  <option value="Norrmal">Norrmal</option>
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
                  {...getFieldProps('AtcdRougeole')}
                  error={Boolean(touched.AtcdRougeole && errors.AtcdRougeole)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">ATCD de Rougeole dans la fratrie:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="text"
                  label="Taille de la fratrie"
                  {...getFieldProps('TailleFratrie')}
                  error={Boolean(touched.TailleFratrie && errors.TailleFratrie)}
                />
                <RadioGroup
                  sx={{ width: '80%', padding: '2px' }}
                  {...getFieldProps('TerrainVih')}
                  error={Boolean(touched.TerrainVih && errors.TerrainVih)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    error={Boolean(touched.TerrainVih && errors.TerrainVih)}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Terrain VIH connu:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="nbr"
                  type="text"
                  label="Nnombre de chute"
                  {...getFieldProps('NombreChute')}
                  error={Boolean(touched.NombreChute && errors.NombreChute)}
                />
                <RadioGroup
                  sx={{ width: '80%', padding: '2px' }}
                  type="text"
                  label="Taille de la fratrie"
                  {...getFieldProps('VaccinatioRougeole')}
                  error={Boolean(touched.VaccinatioRougeole && errors.VaccinatioRougeole)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Vaccination rougeole:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </SubDivContenaire>
          </SubDiv>
          <SubDiv />
        </Div>
        {/* <Typography variant="h5" sx={{ textAlign: 'center' }}>
          2/3
        </Typography> */}
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
            size="large"
            type="submit"
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

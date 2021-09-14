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
  // Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  // InputLabel,
  Select
  // styled
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
CauseForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func
};

export default function CauseForm({ NextStep, SetDataPatient, PrevStep }) {
  const [tbcDesabled, setTbcDesabled] = useState(true);
  const handleDesablebComponent = (event) => {
    const { value } = event.target;
    if (value === false) {
      setTbcDesabled((prevState) => !prevState);
    }
  };
  const RegisterSchema = Yup.object().shape({
    lieuAccouchement: Yup.string().required('Lieu accouchement requis'),
    tailleFratrie: Yup.number().required('Taille fratrie requis'),
    sejourNeo: Yup.string().required('sejour requis'),
    masFratrie: Yup.string().required('masfratien requis'),
    atcdMas: Yup.string().required('Aatcdmas requis'),
    atcdRougeole: Yup.string().required('atcd Rougeole requis'),
    tbcChezParent: Yup.string().required('tbc chez parent requis'),
    tbcLequel: Yup.string(),
    tbcTraiter: Yup.string(),
    tbc: Yup.string().required('Tbc requis'),
    hospitalisationRecente: Yup.string().required('hospitalisation requis'),
    diagnostiqueHospitalisation: Yup.string(),
    dureeTraitementTbc: Yup.string(),
    termeGrossesse: Yup.string().required('Terme grossesse requis'),
    calendrierVaccin: Yup.string().required('Calendrier vaccin requis'),
    atcdDuTbcDansFratrie: Yup.string().required('champ tbc requis'),
    preciserCalendrierVaccinNonjour: Yup.string(),
    AsphyxiePrerinatale: Yup.string().required(),
    rangFratrie: Yup.string().required('Rang fratrie requis'),
    produitPlante: Yup.string().required('Produit plante requis'),
    terrainVih: Yup.string().required('Terrain vih requis'),
    nombreChute: Yup.number().positive().required('Nombre de chute requis'),
    vaccinationRougeole: Yup.string().required(),
    eig: Yup.number().required('Eig requis'),
    TbcGuerie: Yup.string(),
    dpm: Yup.string().required('Dpm requis'),
    cocktailAtb: Yup.string().required('cocktailAtb requis'),
    cocktailAtbDuree: Yup.string(),
    dureeTraitementProduitPlante: Yup.string(),
    dpmAnormalPrecision: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      rangFratrie: '',
      lieuAccouchement: '',
      sejourNeo: '',
      cocktailAtbDuree: '',
      cocktailAtb: '',
      atcdMas: '',
      atcdRougeole: '',
      tbcChezParent: '',
      tbcLequel: '',
      tbcTraiter: '',
      dureeTraitementTbc: '0',
      TbcGuerie: '',
      termeGrossesse: '',
      calendrierVaccin: '',
      preciserCalendrierVaccinNonjour: '',
      AsphyxiePrerinatale: '',
      tailleFratrie: '',
      masFratrie: '',
      terrainVih: '',
      nombreChute: '',
      vaccinationRougeole: '',
      eig: '',
      dpm: '',
      produitPlante: '',
      hospitalisationRecente: '',
      diagnostiqueHospitalisation: '',
      atcdDuTbcDansFratrie: '',
      dpmAnormalPrecision: '',
      dureeTraitementProduitPlante: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (CauseMalnutrition) => {
      SetDataPatient((current) => ({ ...current, CauseMalnutrition }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={11} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                native
                fullWidth
                sx={{ padding: '2px' }}
                value={values.lieuAccouchement}
                error={Boolean(touched.lieuAccouchement && errors.lieuAccouchement)}
                {...getFieldProps('lieuAccouchement')}
              >
                <option value="" selected disabled hidden>
                  Lieu d'accouchement
                </option>
                <option value="Voiture">Voiture</option>
                <option value="domicile">domicile</option>
                <option value="Structure sanitaire oui">Structure sanitaire</option>
              </Select>
              <RadioGroup
                fullWidth
                sx={{ visibility: 0 }}
                error={Boolean(touched.sejourNeo && errors.sejourNeo)}
                {...getFieldProps('sejourNeo')}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
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
                fullWidth
                sx={{ padding: '2px' }}
                label="eig moyen (année)"
                {...getFieldProps('eig')}
                error={Boolean(touched.eig && errors.eig)}
              />
              <TextField
                sx={{ padding: '2px' }}
                label="Rang dans la fratrie"
                fullWidth
                {...getFieldProps('rangFratrie')}
                error={Boolean(touched.rangFratrie && errors.rangFratrie)}
              />
              <RadioGroup
                fullWidth
                {...getFieldProps('masFratrie')}
                error={Boolean(touched.masFratrie && errors.masFratrie)}
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
              <RadioGroup
                fullWidth
                onChange={handleDesablebComponent}
                // {...getFieldProps('tbc')}
                // error={Boolean(touched.tbc && errors.tbc)}
              >
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
                fullWidth
                {...getFieldProps('tbcChezParent')}
                error={Boolean(touched.tbcChezParent && errors.tbcChezParent)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label"> TBC chez les parents:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <Select
                native
                fullWidth
                {...getFieldProps('tbcLequel')}
                error={Boolean(touched.tbcLequel && errors.tbcLequel)}
                disabled={tbcDesabled}
              >
                <option value="" selected disabled hidden>
                  Si TBC oui lequel
                </option>
                <option value="Père">Père</option>
                <option value="Mère">Mère</option>
                <option value="Les deux">Les deux</option>
              </Select>
              <RadioGroup
                fullWidth
                {...getFieldProps('tbcTraiter')}
                error={Boolean(touched.tbcTraiter && errors.tbcTraiter)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC traitée :</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup
                fullWidth
                {...getFieldProps('TbcGuerie')}
                error={Boolean(touched.TbcGuerie && errors.TbcGuerie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC déclarée guérie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      disabled={tbcDesabled}
                      control={<Radio />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Durée de traitement TBC"
                {...getFieldProps('dureeTraitementTbc')}
                error={Boolean(touched.dureeTraitementTbc && errors.dureeTraitementTbc)}
              />
              <RadioGroup
                {...getFieldProps('hospitalisationRecente')}
                error={Boolean(touched.hospitalisationRecente && errors.hospitalisationRecente)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Hospitalisation récente:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Diagnostic hopital"
                {...getFieldProps('diagnostiqueHospitalisation')}
                error={Boolean(
                  touched.diagnostiqueHospitalisation && errors.diagnostiqueHospitalisation
                )}
              />
              <RadioGroup
                {...getFieldProps('produitPlante')}
                error={Boolean(touched.produitPlante && errors.produitPlante)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Prise des produits à base des plantes:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Si Oui veuillez précisez la durée"
                {...getFieldProps('dureeTraitementProduitPlante')}
                error={Boolean(
                  touched.dureeTraitementProduitPlante && errors.dureeTraitementProduitPlante
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={11} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                {...getFieldProps('termeGrossesse')}
                error={Boolean(touched.termeGrossesse && errors.termeGrossesse)}
              >
                <option value="" selected disabled hidden>
                  Terme de la grossesse
                </option>
                <option value="Prématuré ">Prématuré</option>
                <option value="A terme">A terme</option>
              </Select>
              <Select
                native
                {...getFieldProps('calendrierVaccin')}
                required
                error={Boolean(touched.calendrierVaccin && errors.calendrierVaccin)}
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
                sx={{ padding: '2px' }}
                label="Si Calendrier vaccinal non à jour veuillez préciser le vaccin non recu ..."
                {...getFieldProps('preciserCalendrierVaccinNonjour')}
                error={Boolean(
                  touched.preciserCalendrierVaccinNonjour && errors.preciserCalendrierVaccinNonjour
                )}
              />
              <RadioGroup
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
              <Select native {...getFieldProps('dpm')} error={Boolean(touched.dpm && errors.dpm)}>
                <option value="" selected disabled hidden>
                  DPM
                </option>
                <option value="Normal">Normal</option>
                <option value="Anormal">Anormal</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                label="Si DPM est anormal veuillez préciser"
                {...getFieldProps('dpmAnormalPrecision')}
                error={Boolean(touched.dpmAnormalPrecision && errors.dpmAnormalPrecision)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                {...getFieldProps('atcdRougeole')}
                error={Boolean(touched.atcdRougeole && errors.atcdRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de Rougeole dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                label="Taille de la fratrie"
                {...getFieldProps('tailleFratrie')}
                error={Boolean(touched.tailleFratrie && errors.tailleFratrie)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                fullWidth
                {...getFieldProps('terrainVih')}
                required
                error={Boolean(touched.terrainVih && errors.terrainVih)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Terrain VIH connu:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                autoComplete="nbr"
                type="text"
                label="Nombre de chute"
                {...getFieldProps('nombreChute')}
                error={Boolean(touched.nombreChute && errors.nombreChute)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                fullWidth
                {...getFieldProps('vaccinationRougeole')}
                error={Boolean(touched.vaccinationRougeole && errors.vaccinationRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Vaccination rougeole:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
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
                {...getFieldProps('cocktailAtb')}
                error={Boolean(touched.cocktailAtb && errors.cocktailAtb)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Notion de prise de cocktail d’ATB</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                fullWidth
                type="text"
                label="Si notion de prise de cocktail est Oui, veuillez préciser la durée"
                {...getFieldProps('cocktailAtbDuree')}
                error={Boolean(touched.cocktailAtbDuree && errors.cocktailAtbDuree)}
              />
              <RadioGroup
                {...getFieldProps('atcdDuTbcDansFratrie')}
                required
                error={Boolean(touched.atcdDuTbcDansFratrie && errors.atcdDuTbcDansFratrie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de TBC dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
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

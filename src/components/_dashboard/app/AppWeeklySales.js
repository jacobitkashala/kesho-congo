// material
import { styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));
// ----------------------------------------------------------------------

const TOTAL = 99;

export default function AppWeeklySales() {
  return (
    <RootStyle>
      <Typography variant="h3">Aujourd'hui</Typography>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <Typography variant="subtitle2">Garçons:30</Typography>
        <Typography variant="subtitle2">Fille:30</Typography>
      </Typography>
    </RootStyle>
  );
}

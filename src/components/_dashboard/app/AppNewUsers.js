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
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

// ----------------------------------------------------------------------

const TOTAL = 80;

export default function AppNewUsers() {
  return (
    <RootStyle>
      <h2>Hier</h2>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <h2>Garçons: 40</h2>
        <h2>Filles:40</h2>
      </Typography>
    </RootStyle>
  );
}

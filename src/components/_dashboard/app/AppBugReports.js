// import bugFilled from '@iconify/icons-ant-design/bug-filled';
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
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

// ----------------------------------------------------------------------

const TOTAL = 40;

export default function AppBugReports() {
  return (
    <RootStyle>
      <h2>Critique</h2>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <h2>Garçons: 20</h2>
        <h2>Filles: 20</h2>
      </Typography>
    </RootStyle>
  );
}

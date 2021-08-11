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
      <Typography variant="h3">Critique</Typography>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Garçons:20
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Fille:20
      </Typography>
    </RootStyle>
  );
}

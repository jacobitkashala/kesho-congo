// import { useNavigate, useLocation } from 'react-router-dom';
// import { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
// import { fakeAuth } from '../fakeAuth';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 564,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  color: '#343F59',
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  // const [emailValue, setEmailValue] = useState('');
  // const [passwordValue, setPasswordValue] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmailValue(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPasswordValue(e.target.value);
  // };

  // const navigate = useNavigate();

  // const location = useLocation();

  // const { from } = location.state || { from: { pathname: '/dashboard' } };
  // // console.log(from.pathname);

  // const login = (e) => {
  //   e.preventDefault();
  //   if (emailValue === 'admin@gmail.com' || passwordValue === '1234') {
  //     fakeAuth.login(() => {
  //       navigate(from);
  //     });
  //   } else {
  //     return null;
  //   }
  // };
  // // console.log(emailValue);
  // // console.log(passwordValue);
  return (
    <RootStyle>
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5, color: '#343F59' }}>
            KESHO CONGO
          </Typography>
          <img src="/static/logo/undraw_doctors_hwty.svg" alt="login" />
        </SectionStyle>
      </MHidden>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Bienvenue!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Entrez vos details ci-bas.</Typography>
          </Stack>
          <LoginForm
          // onChangeEmail={handleEmailChange}
          // onChangePassword={handlePasswordChange}
          // emailValue={emailValue}
          // passwordValue={passwordValue}
          // handleFormSubmit={login}
          />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

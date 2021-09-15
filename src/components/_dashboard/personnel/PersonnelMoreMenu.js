import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
// -------------------MODAL
import Dialog from '@material-ui/core/Dialog';
import deleteFill from '@iconify/icons-eva/person-delete-fill';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Stack,
  FormControlLabel,
  // FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// import { makeStyles } from '@material-ui/styles';

// ----------------------------------------------------------------------
import Delete from '@material-ui/icons/Delete';

import { fakeAuth } from '../../../fakeAuth';
// ----------------------------------------------------------------------

PersonnelListToolbar.propTypes = {
  value: PropTypes.string
};
export default function PersonnelListToolbar({ value }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModalChangeStatus, setopenModalChangeStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const handleDeleteClick = () => {
    setLoader(true);
    Axios.delete(`https://kesho-congo-api.herokuapp.com/user?id_user=${value}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        const message = response.data;
        console.log('Yves', message);
        fakeAuth.login(() => {
          navigate(from);
          navigate('/dashboard/personnel', { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenStatus = () => {
    setopenModalChangeStatus(true);
  };
  const handleCloseModaleChangeStatus = () => {
    setopenModalChangeStatus(false);
  };
  const handleClickChangeStatus = () => {
    setopenModalChangeStatus(true);
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 189, maxWidth: '100%', py: 3 }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <ListItemIcon sx={{ color: 'red' }}>
            <Delete width={35} height={35} onClick={handleClickOpen} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">"Supprimer un utilisateur?"</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Cette action est irreversible, si vous supprimez un utilisateur vous ne serrez
                  plus en mésure de recuperer ses informations.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Annuler
                </Button>
                <LoadingButton
                  onClick={handleDeleteClick}
                  size="medium"
                  type="submit"
                  color="error"
                  variant="contained"
                  loading={loader}
                >
                  Accepter
                </LoadingButton>
              </DialogActions>
            </Dialog>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{ textAlign: 'center', color: 'text.secondary' }}
            onClick={handleClickOpenStatus}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingLeft: '8px'
              }}
            >
              <Icon icon={deleteFill} width={40} height={25} />
              <Typography variant="h6">statut</Typography>
            </div>
          </ListItemIcon>
          <Dialog
            open={openModalChangeStatus}
            onClose={handleCloseModaleChangeStatus}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Changer le status de {}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <RadioGroup>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <Stack direction={{ xs: 'row', sm: 'column' }}>
                      <FormControlLabel value="Docteur" control={<Radio />} label="Docteur" />
                      <FormControlLabel value="Medécin" control={<Radio />} label="Medécin" />
                      <FormControlLabel
                        value="Nutritionniste"
                        control={<Radio />}
                        label="Nutritionniste"
                      />
                      <FormControlLabel
                        value="Santé public"
                        control={<Radio />}
                        label="Santé public"
                      />
                    </Stack>
                  </Stack>
                </RadioGroup>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Annuler
              </Button>
              <LoadingButton
                onClick={handleClickChangeStatus}
                size="medium"
                type="submit"
                variant="contained"
                loading={loader}
                color="error"
              >
                Changer de statut
              </LoadingButton>
            </DialogActions>
          </Dialog>
        </MenuItem>
      </Menu>
    </>
  );
}

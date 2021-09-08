import { Icon } from '@iconify/react';
import propTypes from 'prop-types';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, Typography } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deletePatientAsync } from '../../../redux/reducers/patientSlice';

// ----------------------------------------------------------------------

PatientMoreMenu.propTypes = {
  id_patient: propTypes.string
};

export default function PatientMoreMenu({ id_patient }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deletePatientAsync({ id: id_patient }));
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
        <MenuItem
          component={RouterLink}
          to={{
            pathname: 'detail_patient',
            state: {
              fromNotifications: true
            }
          }}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Icon icon={eyeFill} width={35} height={35} />
            <Typography variant="h6">Voir</Typography>
          </ListItemIcon>
        </MenuItem>
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={35} height={35} />
            <Typography variant="h6">Edit</Typography>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon sx={{ textAlign: 'center', color: 'text.secondary' }}>
            <Delete width={35} height={15} />
            <Typography variant="h6">Supprimer</Typography>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}

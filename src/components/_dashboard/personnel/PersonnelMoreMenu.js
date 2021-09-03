import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
// material  Typography
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from '../../../redux/reducers/userSlice';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar({ value }) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserAsync({ id: value }));
    // console.log(value);
  };
  return (
    <>
      <MenuItem>
        <ListItemIcon sx={{ color: 'red' }}>
          <Icon icon={trash2Outline} width={35} height={35} onClick={handleDeleteClick} />
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}

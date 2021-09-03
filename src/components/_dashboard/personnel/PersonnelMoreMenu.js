// import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
import Delete from '@material-ui/icons/Delete';
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
          <Delete width={35} height={35} onClick={handleDeleteClick} />
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}

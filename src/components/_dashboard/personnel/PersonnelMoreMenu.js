// import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
import Delete from '@material-ui/icons/Delete';
import { MenuItem, ListItemIcon } from '@material-ui/core';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar(idUser) {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <>
      <MenuItem>
        <ListItemIcon
          sx={{ color: 'red' }}
          onClick={() => {
            handleClick(idUser);
          }}
        >
          <Delete width={35} height={35} />
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}

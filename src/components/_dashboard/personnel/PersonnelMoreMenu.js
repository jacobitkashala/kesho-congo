// import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
import Delete from '@material-ui/icons/Delete';
import { MenuItem, ListItemIcon } from '@material-ui/core';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar() {
  return (
    <>
      <MenuItem>
        <ListItemIcon sx={{ color: 'red' }}>
          <Delete width={35} height={35} />
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}

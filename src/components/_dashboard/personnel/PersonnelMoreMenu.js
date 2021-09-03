import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
// material  Typography
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
          <Icon icon={trash2Outline} width={35} height={35} />
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}

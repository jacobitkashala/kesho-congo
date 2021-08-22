import { Icon } from '@iconify/react';
// import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
// material  Typography
import { MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar() {
  return (
    <>
      <MenuItem sx={{ color: 'text.error' }}>
        <ListItemIcon>
          <Icon icon={trash2Outline} width={35} height={35} />
        </ListItemIcon>
        <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      </MenuItem>
    </>
  );
}

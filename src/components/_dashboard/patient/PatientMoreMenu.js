import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, Typography } from '@material-ui/core';
// import Label from '../../Label';
// ----------------------------------------------------------------------

export default function EnfantMoreMenu() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <MenuItem component={RouterLink} to="/detail_patient" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={35} height={35} />
            <Typography variant="h6">Supprimer</Typography>
          </ListItemIcon>
        </MenuItem>
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={35} height={35} />
            <Typography variant="h6">Edit</Typography>
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/dashboard/detail_patient"
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Icon icon={eyeFill} width={35} height={35} />
            <Typography variant="h6">Voir</Typography>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}

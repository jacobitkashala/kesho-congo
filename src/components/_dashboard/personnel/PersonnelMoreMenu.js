import Delete from '@material-ui/icons/Delete';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from '../../../redux/reducers/userSlice';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar({ value }) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserAsync({ id: value }));
  };
  return (
    <>
      <MenuItem>
        <ListItemIcon sx={{ color: 'red' }}>
          <Delete width={35} height={35} onClick={handleDeleteClick} />
        </ListItemIcon>
      </MenuItem>
    </>
  );
}

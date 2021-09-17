import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { makeStyles } from '@material-ui/styles';
import { LoadingButton } from '@material-ui/lab';
// material
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { textAlign } from '@material-ui/system';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textAlign: 'center',
    position: 'absolute',
    left: '30%'
  }
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240
}));

// ----------------------------------------------------------------------

PersonnelListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};

export default function PersonnelListToolbar({ numSelected, filterName, onFilterName, loading }) {
  const classes = useStyles();
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selectionés
        </Typography>
      ) : (
        <>
          <LoadingButton
            variant="contained"
            color="primary"
            type="submit"
            loading={loading}
            className={classes.button}
            endIcon={
              <Icon>
                <SearchIcon />
              </Icon>
            }
          />
          <SearchStyle value={filterName} onChange={onFilterName} placeholder="Tapez un nom" />
        </>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Icon icon={trash2Fill} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Icon icon={roundFilterList} />
          </IconButton>
        </Tooltip>
      )} */}
    </RootStyle>
  );
}

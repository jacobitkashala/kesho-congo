import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, ...other }, ref) => (
  <Box ref={ref} {...other}>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;

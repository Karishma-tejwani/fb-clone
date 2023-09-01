import { Box } from '@mui/material';
import React from 'react';

const RightSide = () => {
  return (
    <Box bgcolor="grey" flex={2} p={2} sx={{ display : {xs:'none', sm:'block'}}}>
      RightSide
    </Box>
  );
};

export default RightSide;

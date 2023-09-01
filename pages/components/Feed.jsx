import React from 'react';
import Post from './Post';
import { Box } from '@mui/material';
import OtherPost from './OtherPost';
import Postthree from './Postthree';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <OtherPost />
      <Postthree />
    </Box>
  );
};

export default Feed;

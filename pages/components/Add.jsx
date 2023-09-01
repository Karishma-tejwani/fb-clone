import { Add as AddIcon, EmojiEmotions, Person } from '@mui/icons-material';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GifBoxIcon from '@mui/icons-material/GifBox';
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  Button,
} from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10,
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" textAlign="center" color="gray">
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Friend6" src="/assets/dp4.jpeg" />
            <Typography variant="span" fontWeight={300}>
              Karishma Tejwani
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            multiline
            rows={3}
            placeholder="What's on your mind, Karishma?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <Tooltip title="Photo/Video" arrow placement="top-start">
              <CollectionsIcon color="success" />
            </Tooltip>
            <Tooltip title="Tag People" arrow placement="top-start">
              <Person color="primary" />
            </Tooltip>
            <Tooltip title="Feeling/Activity" arrow placement="top-start">
              <EmojiEmotions sx={{ color: '#ffee33' }} />
            </Tooltip>
            <Tooltip title="Check-in" arrow placement="top-start">
              <LocationOnIcon color="error" />
            </Tooltip>
            <Tooltip title="GIF" arrow placement="top-start">
              <GifBoxIcon sx={{ color: '#00e676' }} />
            </Tooltip>
          </Stack>
          <Button variant="contained" sx={{ width: '100%' }}>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  ListItemText,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
} from '@mui/material';
import React from 'react';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const RightSide = () => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300} color={'grey'} my={3}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Friend1" src="/assets/dp1.jpeg" />
          <Avatar alt="Friend2" src="/assets/dp6.PNG" />
          <Avatar alt="Friend3" src="/assets/dp5.jpeg" />
          <Avatar alt="Friend4" src="/assets/dp2.jpg" />
          <Avatar alt="Friend5" src="/assets/dp3.jpeg" />
          <Avatar alt="Friend6" src="/assets/dp4.jpeg" />
          <Avatar alt="Friend1" src="/assets/dp1.jpeg" />
          <Avatar alt="Friend2" src="/assets/dp6.PNG" />
          <Avatar alt="Friend3" src="/assets/dp5.jpeg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} color={'grey'} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={300} color={'grey'}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/assets/dp6.PNG" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/assets/dp4.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/assets/dp5.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightSide;

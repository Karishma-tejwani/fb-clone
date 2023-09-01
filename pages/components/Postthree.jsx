import {
    Box,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Checkbox,
  } from '@mui/material';
  import React from 'react';
  import { orange } from '@mui/material/colors';
  import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  
  const Postthree = () => {
    return (
      <Box>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: orange[300] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="John Doe"
            subheader="August 15, 2023"
          />
          <CardMedia component="img" image="/assets/girl.jpg" alt="Scenery" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along with
              the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    );
  };
  
  export default Postthree;
  
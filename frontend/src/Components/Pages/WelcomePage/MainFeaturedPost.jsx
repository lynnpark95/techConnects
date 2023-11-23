// MainFeaturedPost.js
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
  sx={{
    position: 'relative',
    p: { xs: 3, md: 6 },
    pr: { md: 0 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  }}
      />
    <Grid container>
        <Grid item md={2}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
           <Typography component="h1" variant="h3" color="inherit" gutterBottom paragraph style={{ whiteSpace: 'nowrap', paddingLeft: '365px', paddingBottom: '100px' }}>
            {post.title}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph style={{ whiteSpace: 'nowrap', paddingLeft: '85px', paddingBottom: '60px' }}>
            {post.description}
          </Typography>
            <Link variant="subtitle1" href="#"></Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
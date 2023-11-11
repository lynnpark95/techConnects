import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Main(props) {
    const { title, posts } = props;
  
    return (
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.title}>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {post.description}
              </Typography>
              <img src={post.image} alt={post.imageText} />
              <a href={post.link}>{post.linkText}</a>
            </div>
          ))
        ) : (
          // Add a welcome message here
          <Typography variant="subtitle1" gutterBottom>
            <span style={{ fontFamily: 'YourDesiredFont', fontSize: '18px' }}>
              Empowering Seamless Care Collaboration<br /><br />
              At Lama Innovationz, we are dedicated to revolutionizing the care experience for care recipients, caregivers, and sponsors alike. Our comprehensive care management system is designed to streamline communication, enhance coordination, and provide real-time insights, all in one secure and user-friendly platform. <br /><br />
              Features: <br /><br />
              1. Centralized Information: Say goodbye to scattered information. Our platform consolidates all essential care-related details, ensuring everyone is on the same page.<br /><br />
              2. Simplified Communication: Communicate effortlessly through our intuitive messaging system. Stay connected and informed, making caregiving a cohesive and collaborative effort.<br /><br />
              3. Real-time Updates: Stay updated with live tracking and notifications. Our system provides real-time insights, so you're always in the loop about care-related activities.<br /><br />
              4. Task Management Made Easy: Coordinate tasks seamlessly. Our tools simplify task assignment, tracking, and completion, promoting efficiency and organization.<br /><br />
              5. Comprehensive Visibility: Gain a holistic view of ongoing care activities. Caregivers, care recipients, and sponsors can access a clear overview, fostering transparency.<br /><br />
              Experience the Future of Caregiving with Lama Innovationz Care Management System. Join us in creating a better life for seniors and those in need through enhanced care coordination and communication.
            </span>
          </Typography>
        )}
      </Grid>
    );
  }
  
  Main.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
  };
  
  export default Main;
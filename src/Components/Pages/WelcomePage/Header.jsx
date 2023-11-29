import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';  // Import Link from react-router-dom
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
        {/* Use the new image URL for your logo */}
        <img src="https://lamainnovationz.com/wp-content/uploads/2022/08/Logo-01.png" alt="Logo" style={{ width: '100px', marginRight: 'auto' }} />
        <div>
          {/* Use the Link component from react-router-dom */}
          <Button component={RouterLink} to="/reg" variant="outlined" size="medium" sx={{ marginRight: '8px' }}>
            Sign Up
          </Button>
          <Button component={RouterLink} to="/signin" variant="outlined" size="medium">
            Sign In
          </Button>
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

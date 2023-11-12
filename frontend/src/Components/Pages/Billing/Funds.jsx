import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const centerText = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center horizontally
  flexDirection: 'column',
  height: '100vh',
};

const bigText = {
  fontSize: '29px',
  marginRight: '70px', // Adjust this value to move the text to the left
};

export default function Deposits() {
  return (
    <React.Fragment>
      <div style={centerText}>
        <div style={bigText}>
          <Link color="primary" href="#" onClick={preventDefault}>
            Add Funds +
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

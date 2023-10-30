import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Balance() {
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        $766.31 CAD
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on Oct 5, 2023
      </Typography>
      <div>
        <Typography color="primary">
          Available
        </Typography>
      </div>
    </React.Fragment>
  );
}
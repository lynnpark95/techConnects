import * as React from 'react';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

export default function PlusIcon() {

    const cloudyBlue = {
        backgroundColor: '#87CEEB',
    borderRadius: '50%',
    padding: '1px',
    color: 'white',
    };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
       <Icon style={cloudyBlue}>+</Icon>
    </Box>
  );
}
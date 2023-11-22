import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1} alignItems="left">
      <Stack direction="row" spacing={1}>
        <Chip label="User Role" color="primary" size='small'/>
      </Stack>
    </Stack>
  );
}
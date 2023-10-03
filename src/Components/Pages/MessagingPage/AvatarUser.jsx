import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarUser() {
  return (
    <Stack direction="row" spacing={2} paddingBottom={1}>
      <Avatar
        alt="Remy Sharp"
        src="./AvatarExample.jpg" // Updated relative path
        sx={{ width: 50, height: 50 }}
      />
    </Stack>
  );
}

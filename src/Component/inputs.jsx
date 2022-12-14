import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormTextFields({val,type}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-password-input"
          label={val}
          type={type}
          autoComplete="current-password"
          className='TextField'
        />

      </div>
     
    </Box>
  );
}

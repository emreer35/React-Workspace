import TextField from '@mui/material/TextField';

const MuiTextField = () => {
  return (
    <div>
      <TextField variant='outlined' type='text' label="isim" color='secondary' size='small'   />
      <TextField  variant='filled' type='text' label="isim" color='secondary' size='small'  />
      <TextField  variant='standard' type='text' label="isim" color='secondary' size='small'  />
    </div>
  );
};

export default MuiTextField;


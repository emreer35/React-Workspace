import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
const MuiButton = () => {
  return (
    <div>
      <div className="mb-4 gap-4 space-x-1">
        <Button variant="contained">Giris</Button>
        <Button variant="outlined">Giris</Button>
        <Button variant="text">Giris</Button>
      </div>
      <div className="mb-4 gap-4 space-x-1">
        <Button variant="contained" color="error">
          Giris
        </Button>
        <Button variant="outlined" color="error">
          Giris
        </Button>
        <Button variant="text" color="error">
          Giris
        </Button>
      </div>
      <div className="mb-4 gap-4 space-x-1">
        <Button variant="contained" color="error" size="large">
          Giris
        </Button>
        <Button variant="outlined" color="error" size="medium">
          Giris
        </Button>
        <Button variant="text" color="error" size="small">
          Giris
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="error"
          size="large"
          endIcon={<AddIcon />}
        >
          Giris
        </Button>
        <Button variant="outlined" color="error" size="medium">
          Giris
        </Button>
        <Button variant="text" color="error" size="small">
          Giris
        </Button>
      </div>
      <div className="my-4">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default MuiButton;

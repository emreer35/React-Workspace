import { Alert, Button, Paper, Snackbar } from "@mui/material";
import { useState } from "react";

const MuiSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Snackbar i ac</Button>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          elevation={3}
          onClose={handleClose}
          severity="success"
          variant="standard"
        >
          Basariyla silindi
        </Alert>
      </Snackbar>
      
    </div>
  );
};

export default MuiSnackbar;

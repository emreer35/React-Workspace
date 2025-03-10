import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MuiDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Button onClick={open}>Open</Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transitionDuration={Transition}
        keepMounted
      >
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bunu silmek istediginize emin misiniz ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Evet</Button>
          <Button onClick={() => setIsOpen(false)}>Hayir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MuiDialog;

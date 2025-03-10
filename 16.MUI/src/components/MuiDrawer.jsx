import { Info } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, List, ListItem } from "@mui/material";
import { useState } from "react";

const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Ac</Button>
      <Box sx={{ width: "350px" }}>
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
          <List>
            <ListItem>
              <IconButton>
                <Info />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default MuiDrawer;

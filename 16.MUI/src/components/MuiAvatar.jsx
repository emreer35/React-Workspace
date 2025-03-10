import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const MuiAvatar = () => {
  return (
    <div>
      <Tooltip title="Delete" placement="top-end" followCursor>
        <IconButton >
          <Delete fontSize="small"/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MuiAvatar;

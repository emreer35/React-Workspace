import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const MuiCheck = () => {
  return <div>
    <FormControl>
        <FormLabel>Ogrenim Durumu</FormLabel>
        <FormGroup>
            <FormControlLabel value="ilkokul" label="ilkokul"
            control={<Checkbox checked={false} />}
            labelPlacement="end"/>
        </FormGroup>
    </FormControl>
  </div>;
};

export default MuiCheck;

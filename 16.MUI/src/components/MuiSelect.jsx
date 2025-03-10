// import React from 'react'

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select  from "@mui/material/Select";
import { useState } from "react";
const MuiSelect = () => {

    const [age, setAge] = useState('')
    // console.log(age)
  return (
    <div>
      <FormControl >
        <InputLabel>Age</InputLabel>
        <Select value={age} label="Age" onChange={(e)=> setAge(e.target.value)}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default MuiSelect;

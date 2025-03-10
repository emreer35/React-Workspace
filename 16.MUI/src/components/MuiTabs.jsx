import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CheckTableList from "./CheckTableList";

const MuiTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box width={500}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="egiitm biglileri" />
          <Tab label="iletisim bilgileri" />
          <Tab label="telefon biglileri" />
        </Tabs>
      </Box>

      <CheckTableList value={value} index={0}>
        Yunus{" "}
      </CheckTableList>
      <CheckTableList value={value} index={1}>
        Emre
      </CheckTableList>
      <CheckTableList value={value} index={2}>
        {" "}
        Er
      </CheckTableList>
    </div>
  );
};

export default MuiTabs;

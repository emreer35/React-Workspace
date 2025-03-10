import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#0D0DFF",
            dark: "#000099",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          bgcolor: "primary.main",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      />
    </ThemeProvider>
  );
};

export default MuiBox;

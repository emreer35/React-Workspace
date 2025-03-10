import { Box, Grid2 } from "@mui/material";

const MuiGrid = () => {
  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <div className="bg-amber-300">xs=4 md=8</div>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <div className="bg-amber-300">xs8 md4</div>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <div className="bg-amber-300">xs6 md4</div>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <div className="bg-amber-300">xs 6 md 8 </div>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MuiGrid;

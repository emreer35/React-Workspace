import { Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import resim from "../assets/iphone.jpg";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Stack spacing={1} width={300}>
          <Skeleton
            animation="pulse"
            variant="text"
            sx={{ fontSize: "1rem" }}
          />
          <Skeleton
            animation="pulse"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton animation="pulse" variant="rounded" height={60} />
          <Skeleton animation="pulse" variant="rounded" height={60} />
        </Stack>
      ) : (
        <img src={resim} />
      )}
    </>
  );
};

export default MuiSkeleton;

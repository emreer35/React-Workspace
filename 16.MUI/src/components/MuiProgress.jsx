import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const MuiProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <CircularProgress />
      <CircularProgress color="error" />
      <CircularProgress color="primary" size={200} />
      <CircularProgress variant="determinate" color="secondary" size={200} value={progress}/>
      <CircularProgress color="secondary" size={200} value="40" />
    </div>
  );
};

export default MuiProgress;

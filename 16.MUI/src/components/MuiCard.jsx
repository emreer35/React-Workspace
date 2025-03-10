import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Iphone from "../assets/iphone.jpg";

const MuiCard = () => {
  return (
    <div>
      <Card elevation={10} className="max-w-sm rounded-t-md">
        <CardMedia sx={{ height: 500 }} image={Iphone} />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            Iphone 16 Pro
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            sapiente quae inventore fugit maiores officiis molestiae voluptatum
            voluptatibus id nesciunt!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">More Detail</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MuiCard;

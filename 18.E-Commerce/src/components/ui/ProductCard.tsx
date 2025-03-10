import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  // Rating,
  Typography,
} from "@mui/material";
import { ProductType } from "../../types/Type";
import { useNavigate } from "react-router-dom";

interface PropProductType {
  product: ProductType;
}
const ProductCard = ({ product }: PropProductType) => {
  const { id, title, image, description, price, category } = product;
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "3",
      }}
    >
      <CardActionArea
        onClick={() => navigate("/product-detail/" + id)}
        sx={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <CardMedia
          sx={{ height: 250, objectFit: "contain" }}
          component="img"
          src={image}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "start", marginBottom: "1" }}
          >
            {title}
          </Typography>
          <Typography sx={{ marginBottom: "1" }} fontSize="small">
            {category.toUpperCase()}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", flexGrow: 1, textAlign: "start" }}
          >
            {/* {description.length > 100
              ? description.slice(0, 100) + "..."
              : description} */}
            {description.substring(1, 200)}
          </Typography>
          <div className="text-end text-yellow-500 font-medium text-lg">
            ${price}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;

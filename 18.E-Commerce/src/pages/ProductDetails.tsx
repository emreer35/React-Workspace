// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { setLoading } from "../app/reducers/AppSlice";
// import { ProductType } from "../types/Type";
// import ProductService from "../services/ProductService";
// import { Box, Button, Container, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { addProductToBasket } from "../app/reducers/BasketSlice";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [item, setItem] = useState<ProductType>();
//   const [count, setCount] = useState<number>(1);
//   const getProductById = async (id: number) => {
//     try {
//       dispatch(setLoading(true));
//       const product: ProductType = await ProductService.getProductById(id);
//       setItem(product);
//     } catch (error) {
//       toast.error("Urun Detaylari Gosterilirken bir hata olustu: " + error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
//   const handleAddToBasket = () => {
//     if (item) {
//       const payload: ProductType = {
//         ...item,
//         count: count,
//       };
//       dispatch(addProductToBasket(payload));
//     }
//   };
//   useEffect(() => {
//     getProductById(Number(id));
//   }, [dispatch]);

//   return (
//     <Container maxWidth="lg" className="mt-12 shadow-xl px-4 py-8">
//       {item && (
//         <>
//           <Grid container spacing={2}>
//             <Grid size={{ lg: 4, sm: 12, xs: 12 }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full max-h-[400px] object-contain mx-auto"
//               />
//             </Grid>
//             <Grid size={{ lg: 8, sm: 12, xs: 12 }}>
//               <div className="flex flex-col justify-between ">
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     marginBottom: 5,
//                   }}
//                 >
//                   <Typography variant="h5" gutterBottom>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="caption">
//                     {item.category.toUpperCase()}
//                   </Typography>
//                 </Box>

//                 <Typography sx={{ marginBottom: 5 }} variant="body2">
//                   {item.description}
//                 </Typography>

//                 <Box className="flex justify-between items-center border border-gray-300 p-4 rounded-lg shadow">
//                   <Typography
//                     variant="h6"
//                     className="font-bold text-yellow-600"
//                   >
//                     ${item.price.toFixed(2)}
//                   </Typography>

//                   <div className="flex items-center gap-4">
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       onClick={() => setCount(Math.max(count - 1, 1))}
//                       className="border rounded-full"
//                     >
//                       <RemoveIcon fontSize="small" />
//                     </Button>
//                     <span className="text-lg font-semibold">{count}</span>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       onClick={() => setCount(count + 1)}
//                       className="border rounded-full"
//                     >
//                       <AddIcon fontSize="small" />
//                     </Button>
//                   </div>
//                 </Box>
//                 <Button
//                   onClick={handleAddToBasket}
//                   sx={{ marginTop: 2, width: 190 }}
//                   variant="contained"
//                   color="primary"
//                   startIcon={<ShoppingCartIcon />}
//                   className="w-full py-3 text-lg font-semibold"
//                 >
//                   Sepete Ekle
//                 </Button>

//                 {/* description price add to basket price */}
//               </div>
//             </Grid>
//           </Grid>
//         </>
//       )}
//     </Container>
//   );
// };

// export default ProductDetails;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setLoading } from "../app/reducers/AppSlice";
import { ProductType } from "../types/Type";
import ProductService from "../services/ProductService";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Rating,
  Divider,
  Chip,
  IconButton,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { addProductToBasket } from "../app/reducers/BasketSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState<ProductType | null>(null);
  const [count, setCount] = useState<number>(1);
  const [loading, setLocalLoading] = useState<boolean>(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getProductById = async (id: number) => {
    try {
      dispatch(setLoading(true));
      setLocalLoading(true);
      const product: ProductType = await ProductService.getProductById(id);
      setItem(product);
    } catch (error) {
      toast.error("Ürün detayları gösterilirken bir hata oluştu: " + error);
    } finally {
      dispatch(setLoading(false));
      setLocalLoading(false);
    }
  };

  const handleAddToBasket = () => {
    if (item) {
      const payload: ProductType = {
        ...item,
        count: count,
      };
      dispatch(addProductToBasket(payload));
      toast.success(`${item.title} sepete eklendi!`);
    }
  };

  useEffect(() => {
    if (id) {
      getProductById(Number(id));
    }
  }, [id, dispatch]);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(Math.max(count - 1, 1));

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Skeleton variant="rectangular" height={400} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Skeleton variant="text" height={60} width="80%" />
              <Skeleton variant="text" height={30} width="40%" sx={{ mb: 2 }} />
              <Skeleton variant="text" height={100} />
              <Skeleton variant="rectangular" height={80} sx={{ mt: 3 }} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }

  if (!item) {
    return (
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" color="error">
            Ürün bulunamadı
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 }, mb: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4}>
          {/* Ürün Resmi */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: { xs: "300px", md: "400px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9f9f9",
                borderRadius: 1,
                p: 2,
                mb: { xs: 2, md: 0 },
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* Ürün Bilgileri */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* Ürün Başlığı ve Kategori */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{
                      fontWeight: "bold",
                      mb: { xs: 1, sm: 0 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Chip
                    label={item.category.toUpperCase()}
                    color="primary"
                    size="small"
                    sx={{ fontWeight: "medium" }}
                  />
                </Box>

                {/* Derecelendirme */}
                <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                  <Rating
                    value={item.rating?.rate || 4.5}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="body2"
                    sx={{ ml: 1, color: "text.secondary" }}
                  >
                    ({item.rating?.count || 120} değerlendirme)
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Açıklama */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Kargo bilgisi */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "success.light",
                    color: "success.contrastText",
                    p: 1.5,
                    borderRadius: 1,
                    mb: 3,
                    width: "fit-content",
                  }}
                >
                  <LocalShippingIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" fontWeight="medium">
                    Bugün sipariş verirseniz 2 iş günü içinde kargoda
                  </Typography>
                </Box>
              </Box>

              <Box>
                {/* Fiyat ve Adet Seçimi */}
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    {item.price.toFixed(2)} ₺
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      p: 0.5,
                    }}
                  >
                    <IconButton
                      onClick={decreaseCount}
                      color="primary"
                      size="small"
                      disabled={count === 1}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Typography
                      variant="body1"
                      sx={{
                        mx: 2,
                        fontWeight: "bold",
                        minWidth: "30px",
                        textAlign: "center",
                      }}
                    >
                      {count}
                    </Typography>

                    <IconButton
                      onClick={increaseCount}
                      color="primary"
                      size="small"
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>

                {/* Aksiyon Butonları */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                  }}
                >
                  <Button
                    onClick={handleAddToBasket}
                    variant="contained"
                    color="primary"
                    fullWidth={isMobile}
                    size="large"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      py: 1.5,
                      fontWeight: "bold",
                      flex: { sm: 2 },
                    }}
                  >
                    Sepete Ekle
                  </Button>

                  <Box sx={{ display: "flex", gap: 1, flex: { sm: 1 } }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      size="large"
                      startIcon={<FavoriteIcon />}
                      sx={{ py: 1.5 }}
                    >
                      {isMobile ? "Favori" : "Favorilere Ekle"}
                    </Button>

                    <IconButton
                      color="default"
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        p: 1.5,
                      }}
                    >
                      <ShareIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetails;

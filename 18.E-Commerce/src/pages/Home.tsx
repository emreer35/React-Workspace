// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ProductType, UserType } from "../types/Type";
// import {
//   setCurrentUser,
//   setLoading,
//   setProducts,
// } from "../app/reducers/AppSlice";
// import { toast } from "react-toastify";
// import ProductService from "../services/ProductService";
// import { RootState } from "../app/store";
// import ProductCard from "../components/ui/ProductCard";
// import Grid from "@mui/material/Grid2";
// import { Container } from "@mui/material";
// import Categories from "../components/ui/Categories";

// const Home = () => {
//   const dispatch = useDispatch();

//   const { products } = useSelector((store: RootState) => store.app);

//   const getAllProducts = async () => {
//     try {
//       dispatch(setLoading(true));
//       const response: ProductType[] = await ProductService.getAllProducts();
//       dispatch(setProducts(response));
//     } catch (error) {
//       dispatch(setLoading(true));
//       toast.error("urunler listelenirken bir hata olustu: " + error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   useEffect(() => {
//     const result = localStorage.getItem("currentUser");
//     if (result) {
//       dispatch(setLoading(true));
//       const currentUser: UserType = JSON.parse(result) as UserType;
//       dispatch(setCurrentUser(currentUser));
//       dispatch(setLoading(false));
//     }
//   }, [dispatch]);

//   return (
//     <div className="flex">
//       <Container className="mt-16">
//         <Categories />

//         <Grid container spacing={2} alignItems="stretch">
//           {/* <Grid size={4}>
//           <Categories />
//         </Grid> */}
//           {products &&
//             products.map((product: ProductType, index: number) => (
//               <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
//                 <ProductCard product={product} />
//               </Grid>
//             ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, UserType } from "../types/Type";
import {
  setCurrentUser,
  setLoading,
  setProducts,
} from "../app/reducers/AppSlice";
import { toast } from "react-toastify";
import ProductService from "../services/ProductService";
import { RootState } from "../app/store";
import ProductCard from "../components/ui/ProductCard";
import {
  Container,
  Typography,
  Box,
  Paper,
  Skeleton,
  Divider,
  useTheme,
  useMediaQuery,
  Pagination,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Categories from "../components/ui/Categories";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";

const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { products, loading } = useSelector((store: RootState) => store.app);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  const getAllProducts = async () => {
    try {
      dispatch(setLoading(true));
      const response: ProductType[] = await ProductService.getAllProducts();
      dispatch(setProducts(response));
    } catch (error) {
      dispatch(setLoading(false)); // Düzeltildi: Hata durumunda loading false olmalı
      toast.error("Ürünler listelenirken bir hata oluştu: " + error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const result = localStorage.getItem("currentUser");
    if (result) {
      dispatch(setLoading(true));
      const currentUser: UserType = JSON.parse(result) as UserType;
      dispatch(setCurrentUser(currentUser));
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  // Sayfalama için ürünleri böl
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f5f7fa",
        minHeight: "100vh",
        pt: { xs: 2, md: 4 },
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Başlık Bölümü */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mb: 3,
            mt: { xs: 8, md: 2 }, // Top navigation için alan bırakmak için
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: { xs: 1, md: 0 },
            }}
          >
            Ürünlerimiz
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Paper
              elevation={1}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
                borderRadius: 2,
                cursor: "pointer",
                flex: 1,
                maxWidth: { xs: "100%", md: "150px" },
              }}
            >
              <FilterListIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="body2" fontWeight="medium">
                Filtrele
              </Typography>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
                borderRadius: 2,
                cursor: "pointer",
                flex: 1,
                maxWidth: { xs: "100%", md: "150px" },
              }}
            >
              <SortIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="body2" fontWeight="medium">
                Sırala
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* Kategoriler */}
        <Paper
          elevation={2}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
          }}
        >
          <Categories />
        </Paper>

        {/* Ürünler */}
        <Box sx={{ position: "relative", minHeight: "500px" }}>
          {loading ? (
            <Grid container spacing={3}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton
                    variant="rectangular"
                    height={320}
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              {products.length === 0 ? (
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Ürün bulunamadı
                  </Typography>
                </Paper>
              ) : (
                <>
                  <Grid container spacing={3} alignItems="stretch">
                    {currentProducts.map(
                      (product: ProductType, index: number) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          key={product.id || index}
                        >
                          <ProductCard product={product} />
                        </Grid>
                      )
                    )}
                  </Grid>

                  {/* Sayfalama */}
                  {products.length > productsPerPage && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                      }}
                    >
                      <Pagination
                        count={pageCount}
                        page={currentPage}
                        onChange={() => handlePageChange}
                        color="primary"
                        size={isMobile ? "small" : "medium"}
                        showFirstButton
                        showLastButton
                      />
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </Box>

        {/* Alt Bölüm Bilgileri */}
        <Paper
          elevation={1}
          sx={{
            mt: 6,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Alışveriş Deneyiminizi Keşfedin
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, lineHeight: 1.7 }}
          >
            En kaliteli ve trend ürünleri sizler için bir araya getirdik. Hızlı
            teslimat ve güvenli alışveriş garantisiyle, ihtiyacınız olan her şey
            parmaklarınızın ucunda. Fırsatları kaçırmamak için düzenli olarak
            sitemizi ziyaret edin.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            Herhangi bir sorunuz olduğunda müşteri hizmetlerimiz size yardımcı
            olmaktan mutluluk duyacaktır.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;

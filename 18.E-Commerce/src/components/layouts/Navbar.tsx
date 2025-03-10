// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { Badge, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import { toast } from "react-toastify";
// import ProductService from "../../services/ProductService";
// import { ProductType } from "../../types/Type";
// import { filterProducts, setProducts } from "../../app/reducers/AppSlice";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));
// const Navbar = () => {
//   const { currentUser } = useSelector((store: RootState) => store.app);
//   const { basket } = useSelector((store: RootState) => store.basket);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleSignOut = () => {
//     localStorage.removeItem("currentUser");
//     navigate("/login");
//     window.location.reload();
//   };

//   const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     try {
//       if (e.target.value) {
//         dispatch(filterProducts(e.target.value));
//       } else {
//         const products: ProductType[] = await ProductService.getAllProducts();
//         dispatch(setProducts(products));
//       }
//     } catch (error) {
//       toast.error("Filtreleme islemi yapilamadi:" + error);
//     }
//   };
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar className="bg-gray-500">
//           <IconButton
//             onClick={() => navigate("/")}
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                 handleFilter(e)
//               }
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Badge
//             style={{ marginLeft: 24 }}
//             badgeContent={basket.length}
//             color="error"
//           >
//             <ShoppingBasketIcon fontSize="medium" />
//           </Badge>
//           {currentUser ? (
//             <Button
//               onClick={handleSignOut}
//               variant="contained"
//               color="warning"
//               sx={{ marginLeft: 4 }}
//             >
//               Logout
//             </Button>
//           ) : (
//             <Button
//               onClick={() => navigate("/login")}
//               variant="contained"
//               color="warning"
//               sx={{ marginLeft: 4 }}
//             >
//               Login
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { toast } from "react-toastify";
import ProductService from "../../services/ProductService";
import { ProductType } from "../../types/Type";
import {
  filterProducts,
  setDrawer,
  setProducts,
} from "../../app/reducers/AppSlice";

// İkonlar
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";

// Arama kutusu stil tanımları
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    padding: "0 4px",
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const Navbar = () => {
  const { currentUser } = useSelector((store: RootState) => store.app);
  const { basket } = useSelector((store: RootState) => store.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Drawer ve Menu için state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setUserMenuAnchor(null);
    navigate("/login");
    window.location.reload();
  };

  const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.value) {
        dispatch(filterProducts(e.target.value));
      } else {
        const products: ProductType[] = await ProductService.getAllProducts();
        dispatch(setProducts(products));
      }
    } catch (error) {
      toast.error("Filtreleme işlemi yapılamadı: " + error);
    }
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = () => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          E-SHOP
        </Typography>
        <IconButton color="inherit" onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        <ListItem component="button" onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Ana Sayfa" />
        </ListItem>

        <ListItem component="button">
          <ListItemIcon>
            <CategoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Kategoriler" />
        </ListItem>

        <ListItem component="button" onClick={() => dispatch(setDrawer(true))}>
          <ListItemIcon>
            <Badge badgeContent={basket.length} color="error">
              <ShoppingBasketIcon color="primary" />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Sepetim" />
        </ListItem>

        <ListItem component="button">
          <ListItemIcon>
            <FavoriteIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Favorilerim" />
        </ListItem>

        <ListItem component="button">
          <ListItemIcon>
            <LocalShippingIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Siparişlerim" />
        </ListItem>
      </List>

      <Divider />

      <List>
        {currentUser ? (
          <>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Kullanıcı"} />
            </ListItem>
            <ListItem component="button" onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Çıkış Yap" />
            </ListItem>
          </>
        ) : (
          <ListItem component="button" onClick={() => navigate("/login")}>
            <ListItemIcon>
              <LoginIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Giriş Yap" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 3,
          backgroundColor: "primary.main",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: { xs: 1, md: 0.5 } }}>
            {/* Mobil Menü Butonu */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => navigate("/")}
              sx={{
                flexGrow: { xs: 1, md: 0 },
                display: "flex",
                fontWeight: "bold",
                letterSpacing: ".3rem",
                cursor: "pointer",
                mr: { md: 4 },
              }}
            >
              E-SHOP
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
              <Button
                color="inherit"
                onClick={() => navigate("/")}
                sx={{ mx: 1 }}
              >
                Ana Sayfa
              </Button>
              <Button color="inherit" sx={{ mx: 1 }}>
                Kategoriler
              </Button>
              <Button color="inherit" sx={{ mx: 1 }}>
                Kampanyalar
              </Button>
            </Box>

            {/* Arama */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleFilter}
                placeholder="Ürün ara..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 1, display: { md: "none" } }} />

            {/* Sepet Butonu */}
            <IconButton
              color="inherit"
              sx={{ ml: { xs: 1, md: 2 } }}
              onClick={() => dispatch(setDrawer(true))}
            >
              <StyledBadge badgeContent={basket.length} color="error">
                <ShoppingBasketIcon />
              </StyledBadge>
            </IconButton>

            {/* Kullanıcı Menüsü */}
            {!isMobile && (
              <>
                <IconButton
                  onClick={handleUserMenuOpen}
                  size="large"
                  edge="end"
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: currentUser ? "secondary.main" : "grey.500",
                    }}
                  >
                    {currentUser ? (
                      'Kullanici'
                    ) : (
                      <PersonIcon />
                    )}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={handleUserMenuClose}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {currentUser ? (
                    [
                      <MenuItem key="profile">
                        <ListItemIcon>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Profilim" />
                      </MenuItem>,
                      <MenuItem key="favorites">
                        <ListItemIcon>
                          <FavoriteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Favorilerim" />
                      </MenuItem>,
                      <MenuItem key="orders">
                        <ListItemIcon>
                          <LocalShippingIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Siparişlerim" />
                      </MenuItem>,
                      <Divider key="divider" />,
                      <MenuItem key="logout" onClick={handleSignOut}>
                        <ListItemIcon>
                          <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Çıkış Yap" />
                      </MenuItem>,
                    ]
                  ) : (
                    <MenuItem
                      onClick={() => {
                        handleUserMenuClose();
                        navigate("/login");
                      }}
                    >
                      <ListItemIcon>
                        <LoginIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Giriş Yap" />
                    </MenuItem>
                  )}
                </Menu>
              </>
            )}

            {/* Mobil Giriş Çıkış Butonu */}
            {isMobile && !currentUser && (
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<LoginIcon />}
                sx={{
                  ml: 1,
                  px: 1,
                  py: 0.5,
                }}
              >
                Giriş
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      {/* AppBar yüksekliği kadar boşluk */}
      <Toolbar />
    </Box>
  );
};

export default Navbar;

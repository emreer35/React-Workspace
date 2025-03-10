// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import { setDrawer } from "../../app/reducers/AppSlice";
// import Drawer from "@mui/material/Drawer";
// const DrawerComponent = () => {
//   const { drawer } = useSelector((store: RootState) => store.app);
//   const { basket } = useSelector((store: RootState) => store.basket);
//   const dispatch = useDispatch();
//   const handleClose = () => dispatch(setDrawer(false));
//   return (
//     <div>
//       <Drawer anchor="right" open={drawer} onClose={handleClose}>
//         {basket &&
//           basket.map((product) => {
//             <div>
//               <img src={product.image} alt={product.title} />
//               <div>{product.title}</div>
//               <div>{product.description}</div>
//               <div>{product.price}</div>
//               <div>{product.count}</div>
//             </div>;
//           })}
//       </Drawer>
//     </div>
//   );
// };

// export default DrawerComponent;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setDrawer, updateCurrentUser } from "../../app/reducers/AppSlice";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  decrementToBasket,
  deleteItem,
  incrementToBasket,
  setBasket,
} from "../../app/reducers/BasketSlice";
import { toast } from "react-toastify";
import { UserType } from "../../types/Type";

const DrawerComponent = () => {
  const { drawer, currentUser } = useSelector((store: RootState) => store.app);
  const { basket } = useSelector((store: RootState) => store.basket);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setDrawer(false));

  // Calculate total price
  const totalPrice =
    basket?.reduce(
      (total, item) => total + item.price * Number(item.count),
      0
    ) || 0;
  const removeItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  const buy = () => {
    const user = currentUser as unknown as UserType | null;

    if (!user) {
      toast.warning("Lütfen önce giriş yapın.");
      return;
    }

    if (typeof user.balance !== "number" || user.balance < totalPrice) {
      toast.warning("Ürünler satın alınamadı: Bakiyeniz yeterli değil.");
      return;
    }

    const remainingTotal = user.balance - totalPrice;
    const payload: UserType = {
      ...user,
      balance: remainingTotal,
    };

    dispatch(updateCurrentUser(payload));

    // Sepeti temizle
    dispatch(setBasket([]));
    localStorage.removeItem("basket");
    toast.success("Ürünler satın alındı");
  };
  return (
    <Drawer anchor="right" open={drawer} onClose={handleClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ShoppingCartIcon sx={{ mr: 1 }} />
            Sepetim ({basket?.length || 0})
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {basket && basket.length > 0 ? (
          <>
            <Box sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
              {basket.map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: "1px solid #eee",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ my: 1 }}
                  >
                    {product.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography variant="h6" color="primary">
                      {product.price.toFixed(2)} ₺
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() => dispatch(decrementToBasket(product.id))}
                        size="small"
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>

                      <Typography sx={{ mx: 1 }}>{product.count}</Typography>

                      <IconButton
                        onClick={() => dispatch(incrementToBasket(product.id))}
                        size="small"
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>

                      <IconButton
                        onClick={() => removeItem(product.id)}
                        color="error"
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                position: "sticky",
                bottom: 0,
                bgcolor: "background.paper",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="h6">Toplam:</Typography>
                <Typography variant="h6" color="primary">
                  {totalPrice.toFixed(2)} ₺
                </Typography>
              </Box>

              <Button
                onClick={buy}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Siparişi Tamamla
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <ShoppingCartIcon
              sx={{ fontSize: 60, color: "text.disabled", mb: 2 }}
            />
            <Typography variant="h6">Sepetiniz boş</Typography>
            <Typography variant="body2" color="text.secondary">
              Ürünleri sepetinize ekleyerek alışverişe başlayabilirsiniz.
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;

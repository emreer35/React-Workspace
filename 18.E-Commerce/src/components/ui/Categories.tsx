import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import { useDispatch } from "react-redux";
import { setLoading, setProducts } from "../../app/reducers/AppSlice";
import { toast } from "react-toastify";
import { pink } from "@mui/material/colors";
import { ProductType } from "../../types/Type";
import ProductService from "../../services/ProductService";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const getAllCategories = async () => {
    try {
      dispatch(setLoading(true));
      const response = await CategoryService.getAllCategories();
      setCategories(response);
    } catch (error) {
      toast.error(
        "kategori listelenirken bir hata olustu lutfen tekrar deneyiniz :" +
          error
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  // handleCategory + service + tum kategoriler
  const handleCategory = async (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryName: string
  ) => {
    try {
      if (e.target.checked) {
        dispatch(setLoading(true));
        const response: ProductType[] =
          await CategoryService.getProductsByCategoryName(categoryName);
        dispatch(setProducts(response));
        setSelectedCategory(categoryName);
      } else {
        dispatch(setLoading(true));

        const response = await ProductService.getAllProducts();

        dispatch(setProducts(response));
      }
    } catch (error) {
      toast.error("Urunler listelenirken hata olustu: " + error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleAll = async () => {
    try {
      const allProduct: ProductType[] = await ProductService.getAllProducts();
      dispatch(setProducts(allProduct));
      setSelectedCategory("");
    } catch (error) {
      toast.error("tum kategoriler goruntulenirken hata olustu: " + error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="flex gap-2 items-center justify-start  mb-8">
      <FormControlLabel
        key="All-products"
        control={
          <Checkbox
            checked={!selectedCategory}
            onClick={handleAll}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        }
        label="All"
      />
      {categories &&
        categories.map((category, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedCategory === category}
                onChange={(e) => handleCategory(e, category)}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
            label={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
    </div>
  );
};

export default Categories;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};


// ORNEK FUCNCTION
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     },
//   )

// asenkon bi sekilde get all users yaptik 
export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  // console.log(response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // http istegi olmaz ise kullanilir
  },
  extraReducers: (builder) => {
    // burada sadece http istekleri yazilir
    // birisi bu fonksiyonu cagirdiginda ve bu sonuc fullfilled basarili bir sonuc verdiginde
    // 
    builder.addCase(getAllUsers.fulfilled , (state , action)=> {
      // state initialState i gosteriyor 
      //action return response.data yi aliyor 
      // statein icerisinde ki users 
      state.users = action.payload
    })
  },
});
// buraya sadece reducers ta ki funcitonlar yazilir
export const {} = userSlice.actions;
export default userSlice.reducer;

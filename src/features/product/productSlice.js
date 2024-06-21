import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilters } from "./productAPI";

const initialState = {
  products: [],
  loading: false,
  error: null,
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort }) => {
    const response = await fetchProductsByFilters(filter, sort);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// export const { increment } = counterSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;

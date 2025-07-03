import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  date: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = await toast.promise(axiosInstance.post("user/register", data), {
      loading: "Wait! creating your account",
      success: (res) => res?.data?.message || "Account created successfully",
      error: (err) => {
        // Try printing error to debug if needed
        console.error("Error during signup:", err);

        const msg =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";
        return msg;
      },
    });

    return res.data;
  } catch (error) {
    // Optional: Re-throw to let createAsyncThunk handle it
    throw error;
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      let res = axiosInstance.post("/user/login", data);

      await toast.promise(res, {
        loading: "Logging in...",
        success: (data) => data?.data?.message,
        error: "Login failed",
      });

      res = await res;
      return res.data; // ✅ returns { success: true, ... }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { success: false, message: "Unknown error" }
      );
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    toast.promise(res, {
      loading: "Wait! logout in progress ... ",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to log out",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for user login
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem(
          "data",
          action?.payload?.user ? JSON.stringify(action?.payload?.user) : ""
        );
        localStorage.setItem("isLoggedIn", action.payload.success);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = action.payload.success;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      });
  },
});

export default authSlice.reducer;

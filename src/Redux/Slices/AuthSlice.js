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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {}=authSlice.action;
export default authSlice.reducer;

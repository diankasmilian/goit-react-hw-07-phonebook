import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64c95219b2980cec85c22343.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log("Fetched contacts:", response.data);
      return response.data;
    } catch (e) {
      console.error("Error fetching contacts:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
   "contacts/addContact",
   async ({name, number}, thunkAPI) => {
     try {
       const response = await axios.post("/contacts", { name, number });
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );

 export const deleteContact = createAsyncThunk(
   "contacts/deleteContact",
   async (id, thunkAPI) => {
     try {
       const response = await axios.delete(`/contacts/${id}`);
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );
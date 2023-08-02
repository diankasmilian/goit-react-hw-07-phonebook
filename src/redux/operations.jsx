import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64c95219b2980cec85c22343.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
   "contacts/addContact",
   async ({name, number}, {rejectWithValue}) => {
     try {
       const response = await axios.post("/contacts", { name, number });
       return response.data;
     } catch (e) {
       return rejectWithValue(e.message);
     }
   }
 );

 export const deleteContact = createAsyncThunk(
   "contacts/deleteContact",
   async (id, {rejectWithValue}) => {
     try {
       const response = await axios.delete(`/contacts/${id}`);
       return response.data;
     } catch (e) {
       return rejectWithValue(e.message);
     }
   }
 );
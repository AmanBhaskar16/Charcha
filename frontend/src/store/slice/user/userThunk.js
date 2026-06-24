import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserThunk = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
);
 
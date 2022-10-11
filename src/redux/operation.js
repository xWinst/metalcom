import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://metalkom.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api';

export const getCatalogs = createAsyncThunk('catalogs/all', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/catalogs/all`);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const sendEmail = createAsyncThunk(
    'email/upload',
    async ({ selectedFile, data }, { rejectWithValue, dispatch }) => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            try {
                await axios.post('/email/upload', formData);
            } catch (error) {
                return rejectWithValue(error);
            }
        }
        dispatch(sendingEmail(data));
    }
);

export const sendingEmail = createAsyncThunk('email/send', async (data, { rejectWithValue }) => {
    try {
        await axios.post('/email', data);
    } catch (error) {
        return rejectWithValue(error);
    }
});

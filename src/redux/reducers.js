import { createSlice } from '@reduxjs/toolkit';
import { getCatalogs, sendEmail, sendingEmail } from './operation';
import { ua, ru, en } from '../localization';

const initialState = {
    catalogs: [],
    lang: ua,
    isLoading: false,
    isSending: false,
};

const catalogsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        languageSelection: (state, action) => {
            switch (action.payload) {
                case 'ua':
                    state.lang = ua;
                    break;
                case 'ru':
                    state.lang = ru;
                    break;
                case 'en':
                    state.lang = en;
                    break;
                default:
                    state.lang = ua;
            }
        },
    },
    extraReducers: {
        [getCatalogs.pending]: state => {
            state.isLoading = true;
        },

        [getCatalogs.fulfilled]: (state, action) => {
            state.catalogs = action.payload;
            state.isLoading = false;
        },

        [getCatalogs.rejected]: (state, action) => {
            state.isLoading = false;
            console.error(`Getting catalogs error: ${action.payload?.message}`);
        },

        [sendEmail.pending]: state => {
            state.isSending = true;
        },

        [sendEmail.fulfilled]: state => {
            state.isSending = true;
        },

        [sendEmail.rejected]: (state, action) => {
            state.isSending = false;
            console.error(`Upload error: ${action.payload?.message}`);
        },

        [sendingEmail.pending]: state => {
            state.isSending = true;
        },

        [sendingEmail.fulfilled]: state => {
            state.isSending = false;
        },

        [sendingEmail.rejected]: (state, action) => {
            state.isSending = false;
            console.error(`Send email error: ${action.payload?.message}`);
        },
    },
});

export const { languageSelection } = catalogsSlice.actions;
export default catalogsSlice.reducer;

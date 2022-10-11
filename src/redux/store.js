import { configureStore } from '@reduxjs/toolkit';
import catalogs from './reducers';

const store = configureStore({
    reducer: catalogs,
});
export default store;

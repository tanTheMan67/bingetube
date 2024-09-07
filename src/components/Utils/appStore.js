import appSlice from "./appSlice";
import { configureStore } from '@reduxjs/toolkit';


const Appstore = configureStore({
    reducer:{
        app:appSlice
    }
});
export default Appstore;
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReduce } from "redux-persist";
import storage from "redux-persist/lib/storage";
import songReducer from "../features/songs/songSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, songReducer);

// export default () => {
//   let persistor = persistStore(persistedReducer);
//   return { store, persistor };
// };

export const store = configureStore({
  reducer: { songs: persistedReducer },
});

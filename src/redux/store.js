import {combineReducers, configureStore} from '@reduxjs/toolkit';
import languageSlice from './slices/languageSlice';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import cartSlice from './slices/cartSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  languageSupport: languageSlice,
  cart:cartSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

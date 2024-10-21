
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// import products from './products/productsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const rootPresistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart",]
}
// const authPresistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["user", "accessToken"]
// }


const rootReducer = combineReducers({
  
})

const presistedReducer = persistReducer(rootPresistConfig, rootReducer)

const store = configureStore({
  reducer: presistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store);
export { store, persistor };

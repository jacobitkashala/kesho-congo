import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../../WebServices';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddware) => getDefaultMiddware().concat(usersApi.middleware)
});

setupListeners(store.dispatch());

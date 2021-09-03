import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUsersAsync = createAsyncThunk('users/getUsersAsync', async () => {
  const response = await fetch('https://kesho-congo-api.herokuapp.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  });
  if (response.ok) {
    const users = await response.json();
    return { users };
  }
});
export const addUsersAsync = createAsyncThunk('users/addUsersAsync', async (payload) => {
  const response = await fetch('https://kesho-congo-api.herokuapp.com/register/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const message = await response.json();
    // console.log(message);
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending]: (state, action) => {},
    [getUsersAsync.fulfilled]: (state, action) => action.payload.users,
    [addUsersAsync.fulfilled]: (state, action) => {
      state.push(action.payload.user);
    }
  }
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default userSlice.reducer;

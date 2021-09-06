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
    const users = await response.json();
    return { users };
  }
});

export const deleteUserAsync = createAsyncThunk('users/deleteUserAsync', async (payload) => {
  const response = await fetch(`https://kesho-congo-api.herokuapp.com/users?id=${payload.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  });
  if (response.ok) {
    return { id: payload.id };
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => action.payload.users,
    [addUsersAsync.fulfilled]: (state, action) => {
      state.push(action.payload.user);
    },
    [deleteUserAsync.fulfilled]: (state, action) => {
      console.log('fetched successfully');
      return state.filter((user) => user.id !== action.payload.id);
    }
  }
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default userSlice.reducer;

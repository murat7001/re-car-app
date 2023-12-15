import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: null,
    loggedIn: false,
    loading: false,
    allUsers:[],
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (input, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `http://localhost:3001/users/${input.userName}`
            );

            return response.data
        } catch (error) {
            rejectWithValue(error.response.data.error)
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/register',
    async (input, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `http://localhost:3001/users`,
                input
            );
            return response;
        } catch (error) {
            rejectWithValue(error.response.data.error);
        }
    }
);

export const editUser = createAsyncThunk(
    'auth/editUser',
    async ({ id, updatedValues }) => {
        try {
            const response = await axios.put(`http://localhost:3001/users/${id}`, updatedValues);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3001/users`);
            return response.data;
        } catch (error) {
            rejectWithValue(error.response.data.error);
        }
    }
);

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['user', 'loggedIn'], // Persist edilecek alanları belirtin
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutUser: (state) => {
            state.loggedIn = false;
            state.user = null;
        },
        loggedFalse: (state) => {
            state.loggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.loggedIn = true
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.loggedIn = false;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loggedIn = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loggedIn = false;
                state.loading = false;
            })
            .addCase(editUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loggedIn = true
                state.loading = false;
            })
            .addCase(editUser.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.allUsers = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state) => {
                state.loading = false;
            });
    },
});

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const { logOutUser, loggedFalse } = authSlice.actions;

export default persistedAuthReducer;
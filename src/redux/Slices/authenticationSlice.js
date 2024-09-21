import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:8080";


/**
 * @asyncThunk Login function
 * @desc Manage the user state when user logs in
 * @param {Object} user - user state
 * @return Returns user data in case of success, or an error message in case of failure.
 */
export const authenticateUser = createAsyncThunk(
  "users/authenticate",
  async (user) => {
    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("Authentication-token", json.token);
      return json; // Ensure your backend returns the correct structure
    } else {
      throw new Error(json.error);
    }
  }
);

/**
 * @asyncThunk Registration function
 * @desc Manage the user state when user registers
 * @param {Object} user - user state
 * @return Returns user data in case of success, or an error message in case of failure.
 */
export const registerUser = createAsyncThunk(
  "users/register",
  async (user) => {
    const response = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json.error);
    }
  }
);

/**
 * @asyncThunk Logout function
 * @desc Log out user and clear the user state
 * @return Returns a message indicating the user has logged out
 */
export const logoutUser = createAsyncThunk(
  "users/logout",
  async () => {
    localStorage.removeItem("Authentication-token");
    return "logged out";
  }
);

/**
 * @asyncThunk Org Registration function
 * @desc Manage the organization registration
 * @param {Object} org - organization data
 * @return Returns organization data in case of success, or an error message in case of failure.
 */
export const registerOrg = createAsyncThunk(
  "org/register",
  async (org) => {
    const response = await fetch(`${baseUrl}/org/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(org),
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json.error);
    }
  }
);

export const userSlice = createSlice({
  name: "authentication",
  initialState: {
    user: {
      _id: "",
      first_name: "",
      username: "",
      last_name: "",
      email: "",
      role: "",
    },
    token: "",
    pending: false,
    success_message: '',
    error: false,
    error_message: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    // Authentication states
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.userData; // Ensure the structure matches your backend
        state.token = action.payload.token;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.error_message = action.error.message;
      })
      // Registration states
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.pending = false;
        state.error = false;
        state.success_message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.error_message = action.error.message;
      })
      // Organization registration states
      .addCase(registerOrg.pending, (state) => {
        state.pending = true;
      })
      .addCase(registerOrg.fulfilled, (state, action) => {
        state.pending = false;
        state.error = false;
        state.success_message = action.payload.message;
      })
      .addCase(registerOrg.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.error_message = action.error.message;
      })
      // Logout states
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = {
          _id: "",
          first_name: "",
          username: "",
          last_name: "",
          email: "",
          role: "",
        };
        state.token = "";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = true;
        state.error_message = action.error.message;
      });
  },
});

export default userSlice.reducer;

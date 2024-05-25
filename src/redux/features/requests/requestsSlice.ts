import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TRequestState = {
  requests: [] ;
};

const initialState: TRequestState = {
  requests: [],
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRequests: (state, action) => {
      const requests = action.payload;
      state.requests = requests;
    },
  },
});

export const { setRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
export const useRequests = (state: RootState) => state.requests.requests;
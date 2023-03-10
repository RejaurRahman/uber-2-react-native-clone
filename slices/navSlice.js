import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    }
  }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state) => state.nav.selectOrigin
export const selectDestination = (state) => state.nav.selectDestination
export const selectTravelTimeInformation = (state) => state.nav.selectTravelTimeInformation

export default navSlice.reducer;

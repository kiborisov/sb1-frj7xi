import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  selectedTimeRange: string;
  selectedTeam: string;
}

const initialState: DashboardState = {
  selectedTimeRange: 'week',
  selectedTeam: 'all',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedTimeRange: (state, action: PayloadAction<string>) => {
      state.selectedTimeRange = action.payload;
    },
    setSelectedTeam: (state, action: PayloadAction<string>) => {
      state.selectedTeam = action.payload;
    },
  },
});

export const { setSelectedTimeRange, setSelectedTeam } = dashboardSlice.actions;

export default dashboardSlice.reducer;
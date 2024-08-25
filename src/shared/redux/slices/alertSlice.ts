import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertStyle, IAlert } from '@widgets/alert/model/Alert.model';

const initialState: {
  alertState: IAlert;
} = {
  alertState: { alert: false, style: AlertStyle.success, alertText: '' },
};

const alertSlice = createSlice({
  name: 'alertState',
  initialState,

  reducers: {
    showAlert(state, action: PayloadAction<IAlert>) {
      state.alertState = action.payload;
      setTimeout(() => {
        hideAlert();
      }, 3000);
    },

    hideAlert(state) {
      state.alertState = initialState.alertState;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;

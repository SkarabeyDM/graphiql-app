import alertReducer, { showAlert } from '@shared/redux/slices/alertSlice';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import { AlertStyle, IAlert } from '@widgets/alert/model/Alert.model';

describe('alertState reducers', () => {
  const initialState: {
    alertState: IAlert;
  } = {
    alertState: { alert: false, style: AlertStyle.success, alertText: '' },
  };

  it('should show error alert', () => {
    const newAlertState: IAlert = {
      alert: true,
      style: AlertStyle.error,
      alertText: 'Show error alert',
    };

    act(() => {
      const newState = alertReducer(initialState, showAlert(newAlertState));
      expect(newState.alertState).toEqual(newAlertState);
    });
  });
});

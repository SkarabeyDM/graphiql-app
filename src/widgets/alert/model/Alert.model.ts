export enum AlertStyle {
  success = 'success',
  error = 'error',
}
export interface IAlert {
  alert: boolean;
  style: AlertStyle;
  alertText: string;
}

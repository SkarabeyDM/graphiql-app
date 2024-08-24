export interface IAuth {
  email: string;
  password: string;
}

export interface IFormData extends IAuth {
  confirmPassword: string;
}

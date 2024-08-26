export interface IAuth {
  email: string;
  password: string;
}

export interface IFormData extends IAuth {
  confirmPassword: string;
}

export interface IIconPassword {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

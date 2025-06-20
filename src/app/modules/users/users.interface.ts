export type TUser = {
  name: string;
  email: string;
  password: string;
  image?: string;
  gender: 'male' | 'female' | 'others';
  role?: 'user' | 'admin';
  isActive?: boolean;
};

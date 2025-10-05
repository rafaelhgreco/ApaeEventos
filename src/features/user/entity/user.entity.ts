interface User {
  id: string;
  idToken: string;
  name: string;
  email: string;
  password: string;
  type: number;
  createdAt: Date;
  updatedAt: Date;
}

export type { User };

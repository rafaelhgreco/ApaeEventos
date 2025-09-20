interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { User };

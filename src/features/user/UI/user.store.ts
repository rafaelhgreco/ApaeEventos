import { create } from 'zustand';

type UserStore = {
  token: string | undefined;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const useUserStore = create<UserStore>(set => ({
  token: undefined,
  setToken: token => set({ token }),
  clearToken: () => set({ token: undefined }),
}));

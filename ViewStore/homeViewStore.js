import { devtools, persist } from "zustand/middleware";

import create from "zustand";

let HomeViewStore = (set) => ({
  L1Selection: 0,
  changeL1Selection: (id) => set((state) => ({ L1Selection: id })),

  L2Selection: 0,
  changeL2Selection: (id) => set((state) => ({ L2Selection: id })),

  L3Selection: 0,
  changeL3Selection: (id) => set((state) => ({ L3Selection: id })),
});

HomeViewStore = devtools(HomeViewStore);
HomeViewStore = persist(HomeViewStore);

export const useHomeViewStore = create(HomeViewStore);

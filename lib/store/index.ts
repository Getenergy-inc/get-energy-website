import { RefObject } from "react";
import { create } from "zustand";


interface HomeStore {
  homeRef: RefObject<HTMLDivElement>;
}

export const useHomeStore = create<HomeStore>((set) => ({
  homeRef: null as unknown as RefObject<HTMLDivElement>,
}));
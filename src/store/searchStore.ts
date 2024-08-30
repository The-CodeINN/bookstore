import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "Gods are not to blame",
  setQuery: (query) => set({ query }),
}));

// store/formStore.ts
import { create } from "zustand";

interface FormData {
  entreprise?: string;
  fonction?: string;
  departement?: string;
  anciennete?: string;
  procedesAutomatises?: string;
  typesAutomatisation?: string[];
  autreAutomatisation?: string;
  productivite?: string;
  qualite?: string;
  contribution?: string[];
  obstacles?: string[];
  competenceLocale?: string;
  autreObstacle?: string;
}

interface FormStore {
  data: FormData;
  updateData: (values: Partial<FormData>) => void;
  resetData: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  data: {},
  updateData: (values) => set((state) => ({
    data: { ...state.data, ...values },
  })),
  resetData: () => set({ data: {} }),
}));

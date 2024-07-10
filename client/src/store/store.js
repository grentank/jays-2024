import { create } from 'zustand';

// const intialChairs = [{ id: 1 }, { id: 2 }, { id: 3 }];

const useAppStore = create((set) => ({
  modalIsOpen: false,
  chairs: [],
  user: undefined,
  toggleModal: () => set((state) => ({ modalIsOpen: !state.modalIsOpen })),
  setChairs: (newChairs) => set(() => ({ chairs: newChairs })),
  addChair: (newChair) =>
    set((state) => ({
      chairs: [...state.chairs, newChair],
    })),
  deleteChairById: (chairId) =>
    set((state) => ({
      chairs: state.chairs.filter((chair) => chair.id !== chairId),
    })),
  setUser: (user) => set({ user }),
}));

export default useAppStore;

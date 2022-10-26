import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "about": {},
  "menu": {},
  "product": {},
  "extra": {}
}});

export default useIoStore;

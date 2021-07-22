import { createContext } from "react";

export const contextValue = {
  firstList: [
    {
      label: "A",
    },
    {
      label: "B",
    },
    {
      label: "C",
    },
  ],
  secondList: [
    {
      label: "C",
    },
    {
      label: "B",
    },
    {
      label: "A",
    },
  ],
};

export const DataContext = createContext("firstList");

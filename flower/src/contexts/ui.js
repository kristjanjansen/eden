import React, { createContext, useContext, useReducer } from "react";

export const uiInitialState = {
  darkLayout: false,
  darkCards: false,
  showDetails: true
};

export const UiContext = createContext();

export const UiProvider = ({ reducer, initialState, children }) => (
  <UiContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UiContext.Provider>
);

export const uiReducer = (state, action) => {
  switch (action.type) {
    case "darkLayout":
      return {
        ...state,
        darkLayout: action.darkLayout
      };
    case "darkCards":
      return {
        ...state,
        darkCards: action.darkCards
      };
    case "showDetails":
      return {
        ...state,
        showDetails: action.showDetails
      };

    default:
      return state;
  }
};

export const useUiContext = () => useContext(UiContext);

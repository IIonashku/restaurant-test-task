import { errorEvent, updateAllergensEvent } from "../events";
import { AppState } from "../types";

const defaultState: AppState = {
  searchText: "",
  isVegan: false,
  isVegetarian: false,
  allergens: [],
  error: null,
};

const excludedStateKeys = ["error"];

const handlerState: ProxyHandler<AppState> = {
  set(target: AppState, props: string, newValue: unknown) {
    target[props] = newValue;

    if (!excludedStateKeys.includes(props)) {
      updateAllergensEvent.dispatch();
    }

    if (props === "error") {
      errorEvent.dispatch();
    }

    return true;
  },
};

export const state = new Proxy(defaultState, handlerState);

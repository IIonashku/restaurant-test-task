import { refs } from "../refs";
import { state } from "../store";

export const handleError = () => {
  if (state.error) {
    refs.errorBoundary.innerHTML = state.error;
  } else {
    refs.errorBoundary.innerHTML = "";
  }
};

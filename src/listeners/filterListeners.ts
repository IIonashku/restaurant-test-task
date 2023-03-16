import { errorEvent, updateAllergensEvent } from "../events";
import {
  handleChangeAllergens,
  handleChangeSearchText,
  handleChangeVeganCheckbox,
  handleChangeVegetarianCheckbox,
  handleError,
  handleUpdateAllergens,
} from "../handlers";
import { refs } from "../refs";

refs.allergenCheckboxes.addEventListener("change", handleChangeAllergens);
refs.veganCheckbox.addEventListener("change", handleChangeVeganCheckbox);
refs.vegetarianCheckbox.addEventListener(
  "change",
  handleChangeVegetarianCheckbox
);
refs.searchInput.addEventListener("input", handleChangeSearchText);

updateAllergensEvent.subscribe(handleUpdateAllergens);
errorEvent.subscribe(handleError);

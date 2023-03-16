import debounce from "lodash.debounce";
import { updateAllergensEvent } from "../events";
import { menuData } from "../mock/menu";
import { state } from "../store";
import { renderMenu } from "../utils";

export const handleChangeAllergens = (event: Event) => {
  const { value, checked } = event.target as HTMLInputElement;

  if (checked) {
    state.allergens.push(value);
  } else {
    state.allergens.splice(state.allergens.indexOf(value), 1);
  }
  updateAllergensEvent.dispatch();
};

export const handleChangeVeganCheckbox = (event: Event) => {
  const { checked } = event.target as HTMLInputElement;
  state.isVegan = checked;
};

export const handleChangeVegetarianCheckbox = (event: Event) => {
  const { checked } = event.target as HTMLInputElement;
  state.isVegetarian = checked;
};

export const handleChangeSearchText = debounce((event: Event) => {
  const { value } = event.target as HTMLInputElement;
  state.searchText = value;
}, 250);

export const handleUpdateAllergens = () => {
  const filteredMenuData = menuData.filter((item) => {
    const nameMatches =
      item.name.toLowerCase().indexOf(state.searchText.toLowerCase()) !== -1;
    const isVeganMatches = state.isVegan ? item.isVegan : true;
    const isVegetarianMatches = state.isVegetarian ? item.isVegetarian : true;
    const allergenMatches = state.allergens.every(
      (allergen) => !item.allergens.includes(allergen)
    );
    return (
      nameMatches && isVeganMatches && isVegetarianMatches && allergenMatches
    );
  });

  renderMenu(filteredMenuData);

  if (state.error === null && filteredMenuData.length === 0) {
    state.error =
      "Failed to find the product according to the specified filter";
  } else if (state.error !== null && filteredMenuData.length > 0) {
    state.error = null;
  }
};

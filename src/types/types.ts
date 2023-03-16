export type Allergens = string[];
export type EventListenerCallback = () => void;

export interface MenuItem {
  name: string;
  isVegan: boolean;
  isVegetarian: boolean;
  allergens: Allergens;
  image?: string;
}

export interface AppState {
  searchText: string;
  isVegan: boolean;
  isVegetarian: boolean;
  allergens: Allergens;
  error: null | string;
}

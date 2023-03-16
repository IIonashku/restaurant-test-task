import { refs } from "../refs";
import { MenuItem } from "../types";

export const createMenuItemMarkup = (item: MenuItem) =>
  `<li class="menuItem">
      <h3 class="menuItem-name">${item.name}</h3>
      <img class="menuItem-img" 
      alt="${item.name}"
      src="${
        item.image
          ? item.image
          : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
      }">
    </li>
`;

// : "https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_960_720.png"
export const renderMenu = (menuList: MenuItem[]) => {
  refs.list.innerHTML = menuList
    .map((item) => createMenuItemMarkup(item))
    .join("");
};

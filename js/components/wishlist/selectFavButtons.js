import { getExistingFav } from "./getExistingFav.js";
import { handleClick } from "./handleClick.js";


export function selectFavButtons() {
    const favButtons = document.querySelectorAll(".item i");    
    
    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick); 
    })
}


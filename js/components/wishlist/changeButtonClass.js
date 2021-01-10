import { getExistingFav } from "./getExistingFav.js";

export function changeButtonClass() {
    const favs = getExistingFav();
    const buttons = document.querySelectorAll(".item i");
    buttons.forEach((button) => {
        favs.forEach((fav) => {
            let buttonId = button.dataset.id;
            let favId = fav.id;
            if (favId === buttonId) {
                if (button.className.endsWith("far")) {
                    button.classList.remove("far")
                    button.classList.add("fas")
                }
            }
            
        })
    })
}
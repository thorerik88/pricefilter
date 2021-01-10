import { displayMessage } from "./displayMessage.js";
import { itemContainer } from "./common/settings.js";

export function createHTML(data) {
    if (data.length === 0) {
        displayMessage("Sorry, no results", itemContainer)
    } else {
        itemContainer.innerHTML = "";
        let itemClass = "far";

        for (let i = 0; i < data.length; i++) {   

            itemContainer.innerHTML += `
                <div class="item">
                    <i class="fa-check-square ${itemClass}" data-id="${data[i].id}" data-name="fav ${data[i].id}"></i>
                    <p>Name: ${data[i].name}</p>
                    <p>Price: ${data[i].price}</p>
                </div>
            `;
        
        }
    }
}




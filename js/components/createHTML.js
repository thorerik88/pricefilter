import { displayMessage } from "./displayMessage.js";

export function createHTML(data) {
    const itemContainer = document.querySelector(".item-container");

    if (data.length === 0) {
        displayMessage("Sorry, no results", itemContainer)
    } else {
        itemContainer.innerHTML = "";
        data.forEach((item) => {

        itemContainer.innerHTML += `
            <div class="item">
                <p>Name: ${item.name}</p>
                <p>Price: ${item.price}</p>
            </div>
        `;
    })
    }
}
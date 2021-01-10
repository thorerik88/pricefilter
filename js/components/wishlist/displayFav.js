import { getExistingFav } from "./getExistingFav.js";
import { createHTML } from "../createHTML.js";
import { displayMessage } from "../displayMessage.js";
import { itemContainer } from "../common/settings.js";

export function displayFav(allData) {
    const favData = sortFav(allData);

    // display message if wishlist is empty
    if (favData.length === 0) {
        displayMessage("No wishes added", itemContainer);
    } else {
        createHTML(favData)
    }
}

export function sortFav(allData) {
    const favArray = [];
    const existingFav = getExistingFav();

    existingFav.filter(fav => {
        if (fav.id !== allData) {
            for (let i=0; i<allData.length; i++) {
                if (JSON.parse(fav.id) === allData[i].id) {
                    favArray.push(allData[i])       
                }
            }
        }
    }) 
    return favArray;
}
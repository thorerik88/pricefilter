import { createHTML } from "./createHTML.js";
import { displayMessage } from "./displayMessage.js";
import { itemContainer } from "./common/settings.js"
import { selectFavButtons } from "./wishlist/selectFavButtons.js";
import { getExistingFav } from "./wishlist/getExistingFav.js";
import { changeButtonClass } from "./wishlist/changeButtonClass.js";


export function searchPrices(itemsToRender, event) {
    const searchValue = event.target.value.trim();
    
    if (searchValue) {
        if (isNaN(searchValue)) {
            // check if searchValue is string or numbers
            displayMessage("Please use numbers", itemContainer);
        } else {
            // filter prices, if numbers are used
            const filteredPrices = itemsToRender.filter(function(item) {
                // convert string prices to float
                if (parseFloat(item.price) <= searchValue) {
                    return true
                }
            })
            createHTML(filteredPrices)
            selectFavButtons();
            changeButtonClass();
        }
        
    } else {
        const existingData = getExistingFav();
        

        if (existingData.length === 0) {
            displayMessage("No wishes added", itemContainer);
        } else {
            createHTML(itemsToRender);
            selectFavButtons();
        }
    }
}
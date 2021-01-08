import { createHTML } from "./createHTML.js";
import { displayMessage } from "./displayMessage.js";
import { itemContainer } from "./common/settings.js"


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
        }
        
    } else {
        createHTML(itemsToRender);
    }
}
import { createHTML } from "./createHTML.js";
import { displayMessage } from "./displayMessage.js";

export function searchPrices(itemsToRender, event) {
    const searchValue = event.target.value.trim();
    const itemContainer = document.querySelector(".item-container")

    
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
        
        if (filteredPrices.length === 0) {
            // add initial results if searchValue is empty
            createHTML(itemsToRender)
        } else {
            createHTML(filteredPrices)
        }
    }
  
}
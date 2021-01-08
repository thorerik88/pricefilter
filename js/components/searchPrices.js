import { createHTML } from "./createHTML.js";

export function searchPrices(itemsToRender) {
    const search = document.querySelector(".search");

        search.onkeyup = function () {
            const searchValue = this.value.trim();
        
            const filteredPrices = itemsToRender.filter(function(item) {
                if (parseFloat(item.price) <= searchValue) {
                    return true
                }
            })

            if (searchValue === undefined) {
                createHTML(results.data)
            } else {
                createHTML(filteredPrices)
            }
        }
}
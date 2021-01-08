import { createHTML } from "./components/createHTML.js";
import { displayMessage } from "./components/displayMessage.js";
import { searchPrices } from "./components/searchPrices.js";
import { itemContainer, url } from "./components/common/settings.js";

async function apiCall() {
    // add loading message
    displayMessage("Loading prices...", itemContainer);

    try {
        const response = await fetch(url);
        const results = await response.json(response);
        // html based on results
        createHTML(results.data)
        let itemsToRender = results.data;
        
        // search max prices end display results
        const search = document.querySelector(".search");
        search.onkeyup = function(event) {
            searchPrices(itemsToRender, event)
        };


    }
    catch (error) {
        displayMessage(error, itemContainer)
    }
}

apiCall();




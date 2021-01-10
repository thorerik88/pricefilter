import { createHTML } from "./components/createHTML.js";
import { displayMessage } from "./components/displayMessage.js";
import { searchPrices } from "./components/searchPrices.js";
import { itemContainer, url, proxy, checkPage } from "./components/common/settings.js";
import { selectFavButtons } from "./components/wishlist/selectFavButtons.js";
import { displayFav } from "./components/wishlist/displayFav.js";
import { changeButtonClass } from "./components/wishlist/changeButtonClass.js";


export async function apiCall() {
    // add loading message
    displayMessage("Loading prices...", itemContainer);

    try {
        const response = await fetch(proxy + url);
        const results = await response.json(response);
        
        // check if page is index.html or wishlist.html, and display data
        if (checkPage) {
            createHTML(results.data)
        } else {
            const allData = results.data;
            displayFav(allData)
        }

        selectFavButtons();
        changeButtonClass();

        // search max prices end display results
        let itemsToRender = results.data;
        const search = document.querySelector(".search");
        if (checkPage) {
            search.onkeyup = function(event) {
                searchPrices(itemsToRender, event)
            };
        }
        
    }
    catch (error) {
        displayMessage(error, itemContainer)
    }
}

apiCall();





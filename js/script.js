import { createHTML } from "./components/createHTML.js";
import { displayMessage } from "./components/displayMessage.js";
import { searchPrices } from "./components/searchPrices.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";
const itemContainer = document.querySelector(".item-container");

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




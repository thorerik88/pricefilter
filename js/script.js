import { createHTML } from "./components/createHTML.js";
import { searchPrices } from "./components/searchPrices.js";
import { displayMessage } from "./components/displayMessage.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function apiCall() {
    try {
        const response = await fetch(url);
        const results = await response.json(response);
        createHTML(results.data)
        let itemsToRender = results.data;
        
        const search = document.querySelector(".search");
        searchPrices(itemsToRender);


    }
    catch (error) {
        console.log(error)
    }
}

apiCall();




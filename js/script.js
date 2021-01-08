import { createHTML } from "./components/createHTML.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function apiCall() {
    try {
        const response = await fetch(url);
        const results = await response.json(response);
        createHTML(results.data)
        let itemsToRender = results.data;
        const search = document.querySelector(".search");

        search.onkeyup = function () {
            const searchValue = this.value.trim();
        
            const filteredPrices = itemsToRender.filter(function(item) {
                if (parseFloat(item.price) <= searchValue) {
                    return true
                }
            })

            if (!searchValue) {
                createHTML(results.data)
            } else {
                createHTML(filteredPrices)
            }
        }


    }
    catch (error) {
        console.log(error)
    }
}

apiCall();




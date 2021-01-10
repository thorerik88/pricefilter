import { getExistingFav } from "./getExistingFav.js";
import { saveFav } from "./saveFav.js";

export function handleClick() {
    
    this.classList.toggle("far");
    this.classList.toggle("fas");

    const id = this.dataset.id;
    const name = this.dataset.name;
    
    const currentFav = getExistingFav();

    const itemExists = currentFav.find(function(fav) {
        return fav.id === id;
    });

    if (!itemExists) {
        const item = { id: id, name: name };
        currentFav.push(item);
        saveFav(currentFav);
        
    } else {
        const newFav = currentFav.filter(fav => fav.id !== id);
        saveFav(newFav);
    } 
}
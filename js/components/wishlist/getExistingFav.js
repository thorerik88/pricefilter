export function getExistingFav() {
    const fav = localStorage.getItem("favorites");

    if (fav === null) {
        return [];
    } else {
        return JSON.parse(fav);
    }
    
}

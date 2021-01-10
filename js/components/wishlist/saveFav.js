export function saveFav(fav) {
    localStorage.setItem("favorites", JSON.stringify(fav));
}
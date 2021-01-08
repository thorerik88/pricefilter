export function displayMessage(message, element) {
    return element.innerHTML = `
        <div class="item">
            <h4>${message}</h4>
        </div>
            `;
}
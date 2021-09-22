let showOptions = false;

show();
function show() {

    main.innerHTML = '';

    const wrapper = createElem("div", main, null, "class", "wrapper");
    const gameTitle = createElem("h1", wrapper, "My Game");
    const gameScreen = createElem("div", wrapper, null, "class", "game-screen");
    
    const computerContainer = createElem("div", gameScreen, null, "class", "player-container");
    playerInformation(computerContainer);
    
    const playerContainer = createElem("div", gameScreen, null, "class", "player-container");
    playerInformation(playerContainer);
    playerBtns(playerContainer);

}

/**
 * 
 * @param {HTMLElement} playerContainer Parent element
 */
function playerInformation(playerContainer) {
    const infoContainer = createElem("div", playerContainer, null, "class", "info-container");
    const healthBarContainer = createElem("div", infoContainer, null, "class", "healthbar-container");
    const healthPoints = createElem("div", healthBarContainer, "100 HP");
    const healthBar = createElem("div", healthBarContainer, null, "class", "health-bar");
}

/**
 * 
 * @param {HTMLElement} playerContainer Parent element
 */
function playerBtns(playerContainer) {
    const btnContainer = createElem("div", playerContainer, null, "class", "btn-container");
    
    if (showOptions) {
        player.options.Attack.forEach(element => {
            const playerOptionBtn = createElem("button", btnContainer, element);
        });
    } else {
        playerOptions.forEach(element => {
            const playerOptionBtn = createElem("button", btnContainer, element);
            playerOptionBtn.onclick = function() {
                showOptions = true;
                show();
            }
        });
    }
}

/**
 * Similar to the createElement function, but simplified for this apps purposes.
 * @param {string} tagName The name of an element.
 * @param {HTMLElement} parent Parent element for this new child element.
 * @param {html} html HTML for innerHTML.
 * @param {string} attrName Example: class, id, width, height..
 * @param {string} attrValue Example: wrapper, container, left-box..
 * @returns {HTMLElement}
 */
 function createElem(tagName, parent, html = '', attrName, attrValue) {
    const element = document.createElement(tagName);
    element.innerHTML = html;
    attrName ? element.setAttribute(attrName, attrValue) : attrName;
    parent.appendChild(element);
    return element;
}
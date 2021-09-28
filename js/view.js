show();
function show() {
    main.innerHTML = '';

    const wrapper = createElem("div", main, null, "class", "wrapper");
    const gameScreen = createElem("div", wrapper, null, "class", "game-screen");
    
    // Computer screen
    const computerContainer = createElem("div", gameScreen, null, "class", "player-container");
    const computerHUD = createElem("div", computerContainer, null, "class", "player-hud");
    playerInformation(computerHUD, computer);
    const infoTextContainer = createElem("div", computerHUD, null, "class", "info-text-container");
    const infoTextBox = createElem("div", infoTextContainer, null, "class", "info-text");
    const infoText = createElem("div", infoTextBox, statusText(infoTextBox));
    const computerAvatarContainer = createElem("div", computerContainer, null, "class", "avatar-container");
    computerAvatar = createElem("div", computerAvatarContainer, null, "class", "computer-avatar");
    computerDialogue = createElem("div", computerAvatar, randomLine, "class", "computer-dialogue");

    // Player screen
    const playerContainer = createElem("div", gameScreen, null, "class", "player-container");
    const playerHUD = createElem("div", playerContainer, null, "class", "player-hud");
    playerInformation(playerHUD, player);
    playerBtns(playerHUD);
    const playerAvatarContainer = createElem("div", playerContainer, null, "class", "avatar-container");
    playerAvatar = createElem("div", playerAvatarContainer, null, "class", "player-avatar");

    // Start random computer dialogues on first round (0)
    (roundCounter === 0) ? doRandomDialogue() : '';
}

function statusText(infoText) {
    if (winner) {
        const winnerText = createElem("div", infoText, `${winner} vant!`);
    } else {
        if (playerAttackPower) {
            let playerAttack = player.options.Attack[playerAttackIndex];
            let computerAttack = computer.attacks.name[randomBossAttackIndex];
            if (usedInventory) {
                const playerStatus = createElem("div", infoText, `${playerName} restored 30 HP`);
            } else {
                const playerStatus = createElem("div", infoText, `${playerName} used <span>${playerAttack}</span> and inflicted <span>${playerAttackPower}</span> damage`);
                if (critical === playerName) {
                    const playerCriticalStatus = createElem("div", infoText, `It's a <span>critical</span> hit!`);
                }
            }
            const computerStatus = createElem("div", infoText, `${computerName} used <span>${computerAttack}</span> and inflicted <span>${computerAttackPower}</span> damage`);
            if (critical === computerName) {
                const computerCriticalStatus = createElem("div", infoText, `It's a <span>critical</span> hit!`);
            }
        }
    }
}

/**
 * 
 * @param {HTMLElement} playerHUD Parent element
 * @param {Array} character Which character (Ex: computer)
 */
function playerInformation(playerHUD, character) {
    let currentHealth = character.stats.health;
    let name = character.stats.name;
    const infoContainer = createElem("div", playerHUD, null, "class", "info-container");
    const healthBarContainer = createElem("div", infoContainer, null, "class", "healthbar-container");
    const characterName = createElem("div", healthBarContainer, name, "class", "character-name");
    const healthPoints = createElem("div", healthBarContainer, currentHealth + " HP");
    const healthBar = createElem("div", healthBarContainer, null, "class", "health-bar");
    const healthBarFluid = createElem("div", healthBar, null, "class", "health-bar-fluid");

    // Change HP fluid color when HP is below X
    currentHealth < 50 ? healthBarFluid.style.background = "yellow" : '';
    currentHealth < 30 ? healthBarFluid.style.background = "red" : '';
    
    // Set health bar fluid % to current HP
    healthBarFluid.style.width = currentHealth + "%";
}

/**
 * 
 * @param {HTMLElement} playerHUD Parent element
 */
function playerBtns(playerHUD) {
    const topBtn = createElem("div", playerHUD, null, "class", "top-btn");

    // If a button is selected, show "Go back" button
    const bckBtn = showBtnOptions ? createElem("button", topBtn, "Go back", "class", "bck-btn") : showBtnOptions;

    bckBtn.onclick = () => {
        showBtnOptions = false;
        show();
    };

    const btnContainer = createElem("div", playerHUD, null, "class", "btn-container");
    
    switch (showBtnOptions) {
        case "Attack":
            player.options.Attack.forEach((attack, attackIndex) => {
                const playerOptionBtn = createElem("button", btnContainer, attack);
                playerOptionBtn.onclick = () => {
                    playerAttack(attackIndex);
                };
            });
            break;

        case "Inventory":
            player.options.Inventory.forEach((item, itemIndex) => {
                const playerOptionBtn = createElem("button", btnContainer, item);
                playerOptionBtn.onclick = () => {
                    useItem(itemIndex);
                };
            });
            break;

        default:
            playerOptions.forEach(element => {
                const playerOptionBtn = createElem("button", btnContainer, element);
                playerOptionBtn.onclick = () => {
                    showBtnOptions = element;
                    show();
                };
            });
            break;
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

function doRandomDialogue() {
    setInterval(function() {
        let line = randomComputerDialogue();
        computerDialogue.innerHTML = line;
        randomLine = line;
    }, 5000);
}

function randomComputerDialogue() {
    let dialogueArray = computer.lines;
    let random = Math.floor(Math.random() * computer.lines.length);
    return dialogueArray[random];
}
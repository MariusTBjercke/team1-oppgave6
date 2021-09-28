function playerAttack(attackIndex) {
    critical = false;
    playerAvatar.classList.add("player-hit");
    setTimeout(() => {
        usedInventory = false;
        // Get attack power from optionValues array with the same index as the attack
        computerLastRoundHP = computer.stats.health;
        playerAttackIndex = attackIndex;
        playerAttackPower = player.optionValues.Attack[attackIndex];
        // Critical hit
        playerAttackPower = criticalHit(playerAttackPower, playerName);
        computer.stats.health -= playerAttackPower;
        playerLastRoundHP = player.stats.health;
        computerAttack();
    }, 1000);
}

/**
 * 
 * @param {number} attackPower The attack power you want to multiply
 * @param {string} player The player name that will be returned in critical variable
 * @returns Double attack power if critical chance fulfilled
 */
function criticalHit(attackPower, player) {
    let r = Math.random();
    // 15% chance
    if (r > 0.85) {
        critical = player;
        return attackPower += attackPower;
    } else {
        return attackPower;
    }
}

function computerAttack() {
    computerCritical = false;
    computerAvatar.classList.add("computer-hit");
    setTimeout(() => {
        randomBossAttackIndex = Math.floor(Math.random() * computer.attacks.name.length);
        computerAttackPower = computer.attacks.power[randomBossAttackIndex];
        // Critical hit
        computerAttackPower = criticalHit(computerAttackPower, computerName);
        player.stats.health -= computerAttackPower;
        checkWinner();
        showBtnOptions = false;
        show();
    }, 1000);
}

/**
 * 
 * @param {number} itemIndex Index of inventory item that corresponds the index of inventory value in player array
 */
function useItem(itemIndex) {
    player.stats.health += player.optionValues.Inventory[itemIndex];
    if (player.stats.health > 100) {
        player.stats.health = 100;
    }
    usedInventory = true;
    computerAttack();
}

function checkWinner() {
    if (player.stats.health <= 0) {
        winner = computer.stats.name;
        player.stats.health = 0;
        computer.stats.health = computerLastRoundHP;
    } else if (computer.stats.health <= 0) {
        winner = player.stats.name;
        computer.stats.health = 0;
        player.stats.health = playerLastRoundHP;
    }

    if (winner) {
        alert(winner + " vant!");
        document.location.href = "index.html";
    }
}
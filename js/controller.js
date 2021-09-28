function playerAttack(attackIndex) {
    critical = false;
    playerAvatar.classList.add("player-hit");
    setTimeout(() => {
        playerAvatar.classList.remove("player-hit");
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

function criticalHit(attackPower, player) {
    let r = Math.random();
    // 15% chance
    if (r > 0.25) {
        critical = player;
        console.log(attackPower);
        return attackPower += attackPower;
    } else {
        return attackPower;
    }
}

function computerAttack() {
    computerCritical = false;
    computerAvatar.classList.add("computer-hit");
    setTimeout(() => {
        computerAvatar.classList.remove("computer-hit");
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
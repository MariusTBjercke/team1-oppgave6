let main = document.querySelector("main");
let winner = false;
let player = {
    stats: {
        name: "Elizio",
        health: 100
    },
    options: {
        Attack: [
            "Sword",
            "Dagger",
            "Slash",
            "Arrow"
        ],
        Inventory: [
            "Health potion"
        ]
    },
    optionValues: {
        Attack: [
            15,
            10,
            18,
            3
        ],
        Inventory: [
            30
        ]
    }
}
let playerOptions = Object.keys(player.options);
let computer = {
    stats: {
        name: "Darth Terje",
        health: 100
    },
    attacks: {
        name: ["Miss Attack", "GET", "Java Saber", "C# Thunder", "Book of Code"],
        power: [0, 50, 20, 15, 10]
    },
    lines: [
        "Nedde vil aldri bli ditt",
        "Goooood, gooood",
        "Power! Unlimited power!",
        "Din CSS kan ikke måle seg med min",
        "NKen er min!"
    ]
}
let showBtnOptions = false;
let usedInventory = false;
let dialogue = "Kom og smak på nedde!";
let playerName = player.stats.name;
let computerName = computer.stats.name;
let playerAttackPower;
let computerAttackPower;
let playerLastRoundHP;
let computerLastRoundHP;
let randomBossAttackIndex;
let playerAttackIndex;
let playerCritical;
let computerCritical;
let computerAvatar;
let playerAvatar;
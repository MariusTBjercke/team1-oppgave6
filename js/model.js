let main = document.querySelector("main");
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
            10,
            6,
            12,
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
        name: ["Miss", "GET", "Java Saber", "C# Thunder", "Book of Code"],
        power: [0, 15, 16, 15, 10]
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
let winner = false;
let roundCounter = 0;
let playerName = player.stats.name;
let computerName = computer.stats.name;
let playerAttackPower;
let computerAttackPower;
let playerLastRoundHP;
let computerLastRoundHP;
let randomBossAttackIndex;
let playerAttackIndex;
let computerDialogue;
// Begin with first line from computer lines array
let randomLine = computer.lines[0];
let dialogueStarted;
let computerAvatar;
let playerAvatar;
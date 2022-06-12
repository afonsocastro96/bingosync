bingoGenerator = require("./generators/generator_bases/srl_generator_v5_blackout.js");

var bingoList = [];

bingoList[1] = [
    { name: "Charcoal", types: []},
    { name: "Itemfinder", types: []},
    { name: "Hard Stone", types: []},
    { name: "Radio Card", types: []},
    { name: "TM05 (Roar)", types: []}
];
bingoList[2] = [
    { name: "Exp. Share", types: []},
    { name: "Catch a Pokémon using Good Rod", types: []},
    { name: "Mystic Water", types: []},
    { name: "Mysteryberry", types: []},
    { name: "TM10 (Hidden Power)", types: []},
    { name: "TM11 (Sunny Day)", types: []}
];
bingoList[3] = [
    { name: "A Pokémon with 4 Moves Sharing its Type", types: []},
    { name: "Equip a Week Sibling’s item to a Pokémon of its Type", types: []},
    { name: "Give a Pokémon a Haircut", types: []},
    { name: "King's Rock", types: []},
    { name: "Slowpoketail", types: ["money"]},
    { name: "TM50 (Nightmare)", types: []}
];
bingoList[4] = [
    { name: "90 Different Pokémon Seen", types: []},
    { name: "A Shiny Pokémon", types: []},
    { name: "Defeat a Legendary Pokémon", types: []},
    { name: "HM05 (Flash)", types: []},
    { name: "TM21 (Frustration) or TM27 (Return)", types: []},
    { name: "Release Starter Before lvl 11", types: []}
];
bingoList[5] = [
    { name: "$0 on Hand or Mom", types: []},
    { name: "7 Different Types of Berries", types: []},
    { name: "Call a Lass", types: []},
    { name: "Call a Sailor", types: []},
    { name: "Defeat 1 Super Nerd in Mt. Mortar", types: []},
    { name: "TM13 (Snore)", types: []}
];
bingoList[6] = [
    { name: "Call a Blackbelt", types: []},
    { name: "Defeat 2 Electrodes", types: []},
    { name: "Defeat all 6 Trainers on Route 38", types: ["trainers"]},
    { name: "Defeat 10 Pokémaniacs", types: ["trainers"]},
    { name: "Defeat all 4 Trainers in National Park", types: []},
    { name: "Defeat all 8 Trainers on Route 32", types: ["trainers"]},
    { name: "Soft Sand", types: []}
];
bingoList[7] = [
    { name: "A Pokémon with a non-HM Accuracy Reducing Move", types: []},
    { name: "A Pokémon with a Rock-Type Move", types: []},
    { name: "A Pokémon with a Sleep-Inducing Move", types: []},
    { name: "A Pokémon with a Speed-Reducing Move", types: []},
    { name: "A Pokémon with an Enhanced Crit-Rate Move", types: []},
    { name: "A Pokémon with an Attacking +Priority Move", types: []},
    { name: "A Pokémon with Detect, Endure, or Protect", types: []}
];
bingoList[8] = [
    { name: "5 Different Types of Pokéballs", types: []},
    { name: "Catch a Pokémon in Tohjo Falls", types: []},
    { name: "Encounter Suicune on Route 42", types: []},
    { name: "HM02 (Fly)", types: []},
    { name: "TM36 (Sludge Bomb)", types: []}
];
bingoList[9] = [
    { name: "Blackglasses", types: []},
    { name: "Defeat 2 Trainers on Route 46", types: []},
    { name: "Catch a Pokémon in the water on Route 45", types: []},
    { name: "Defeat a Lapras", types: []},
    { name: "Open 2 Hidden Chambers in the Ruins of Alph", types: []},
    { name: "Max Phonebook", types: ["trainers"]}
];
bingoList[10] = [
    { name: "Defeat 6 Swimmers", types: ["trainers"]},
    { name: "Defeat 8 Trainers in Lighthouse", types: ["trainers"]},
    { name: "Defeat a Lv40+ Pokémon", types: []},
    { name: "Defeat all 7 Trainers on Route 44", types: ["trainers"]},
    { name: "Defeat Rival 4", types: []}
];
bingoList[11] = [
    { name: "20+ Different TM's", types: []},
    { name: "6 Badges", types: []},
    { name: "Buy all 3 Game Corner Pokémon", types: ["money"]},
    { name: "Evolve 4 Different Pokémon", types: []},
    { name: "Glacier Badge", types: []},
    { name: "Use Struggle", types: []}
];
bingoList[12] = [
    { name: "25+ Different Pokémon Owned", types: []},
    { name: "Everstone or Gold Berry", types: []},
    { name: "Place a doll in your bedroom", types: ["money"]},
    { name: "Stop the Same Pokémon Evolving 4 Times", types: []},
    { name: "Win Bug Catching Contest", types: []}
];
bingoList[13] = [
    { name: "A Pokémon with 4 Non-HM Field Moves", types: []},
    { name: "All HMs", types: []},
    { name: "A Pokémon with 4 Non-TM Non-Attacking Moves", types: []},
    { name: "Berry Juice or Elixer", types: []},
    { name: "Inflict a UI-changing status to Sudowoodo", types: []},
    { name: "Trade a Pokémon", types: []}
];
bingoList[14] = [
    { name: "2 Different Baby Pokémon", types: []},
    { name: "2 Different Eeveelutions", types: []},
    { name: "A Dark-Type Pokémon", types: []},
    { name: "A Dragon-Type Pokémon", types: []},
    { name: "A Ghost-Type Pokémon", types: []},
    { name: "A Steel-Type Pokémon", types: []}
];
bingoList[15] = [
    { name: "3 Different Genderless Pokémon", types: []},
    { name: "5 Different Fire Types or 5 Different Psychic Types", types: []},
    { name: "6 Different Bug Types or 6 Different Grass Types", types: []},
    { name: "6 Different Flying Types", types: []},
    { name: "7 Different Normal Types", types: []},
    { name: "7 Different Poison Types", types: []},
    { name: "8 Different Water Types", types: []}
];
bingoList[16] = [
    { name: "Arcanine or Ninetales", types: []},
    { name: "Clefable or Wigglytuff", types: []},
    { name: "Cloyster or Starmie", types: []},
    { name: "Exeggutor or Sunflora", types: []},
    { name: "Poliwrath or Slowking", types: []}
];
bingoList[17] = [
    { name: "Bayleef, Croconaw, or Quilava", types: []},
    { name: "Beedrill or Butterfree", types: []},
    { name: "Charmeleon, Ivysaur, or Wartortle", types: []},
    { name: "Nidoking or Nidoqueen", types: []},
    { name: "Victreebel or Vileplume", types: []}
];
bingoList[18] = [
    { name: "Entei, Raikou, or Suicune", types: []},
    { name: "Ho-Oh or Lugia", types: []},
    { name: "TM04 (Rollout) or TM20 (Endure)", types: []},
    { name: "TM34 (Swagger) or TM46 (Thief)", types: []}
];
bingoList[19] = [
    { name: "Arbok or Xatu", types: []},
    { name: "Ariados or Ledian", types: []},
    { name: "Azumarill or Quagsire", types: []},
    { name: "Fearow or Noctowl", types: []},
    { name: "Flaaffy or Skiploom", types: []},
    { name: "Furret or Kadabra", types: []},
    { name: "Pidgeotto or Raticate", types: []}
];
bingoList[20] = [
    { name: "Aipom, Heracross, or Pinsir", types: []},
    { name: "Articuno, Moltres, or Zapdos", types: []},
    { name: "Celebi, Mew, or Mewtwo", types: []},
    { name: "Dunsparce, Girafarig, or Wobbuffet", types: []},
    { name: "Farfetch'd, Lickitung, or Mr. Mime", types: []},
    { name: "Piloswine, Tangela, or Yanma", types: []}
];
bingoList[21] = [
    { name: "Corsola or Qwilfish", types: []},
    { name: "Delibird or Stantler", types: []},
    { name: "Ditto or Smeargle", types: []},
    { name: "Gligar or Sneasel", types: []},
    { name: "Kangaskhan or Snorlax", types: []},
    { name: "Mantine or Skarmory", types: []},
    { name: "Miltank or Tauros", types: []},
    { name: "Misdreavus or Murkrow", types: []}
];
bingoList[22] = [
    { name: "Cubone or Rhyhorn", types: []},
    { name: "Horsea or Ponyta", types: []},
    { name: "Houndour or Snubbull", types: []},
    { name: "Magikarp or Tentacool", types: []},
    { name: "Mankey or Meowth", types: []},
    { name: "Paras or Venonat", types: []},
    { name: "Phanpy or Teddiursa", types: []},
    { name: "Pikachu or Sandshrew", types: []}
];
bingoList[23] = [
    { name: "Aerodactyl, Kabuto, or Omanyte", types: []},
    { name: "Dodrio, Dugtrio, or Magneton", types: []},
    { name: "Drowzee, Koffing, or Zubat", types: []},
    { name: "Electabuzz, Jynx, or Magmar", types: []},
    { name: "Graveler, Haunter, or Machoke", types: []},
    { name: "Hitmonchan, Hitmonlee, or Hitmontop", types: []}
];
bingoList[24] = [
    { name: "Blissey or Togetic", types: []},
    { name: "Dewgong or Seaking", types: []},
    { name: "Dragonite or Tyranitar", types: []},
    { name: "Forretress or Octillery", types: []},
    { name: "Golduck or Porygon2", types: []},
    { name: "Kingler or Lanturn", types: []},
    { name: "Magcargo or Muk", types: []},
    { name: "Onix or Scyther", types: []}
];
bingoList[25] = [
    { name: "Catch a Pokémon in Lugia's Room", types: []},
    { name: "Catch a Pokémon on the 9th Floor of Tin Tower", types: []},
    { name: "Complete all 4 Ruins of Alph Puzzles", types: []},
    { name: "Mineral Badge", types: []},
    { name: "Rising Badge", types: []}
];

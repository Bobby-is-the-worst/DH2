export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	hawlucha: {
		inherit: true,
		otherFormes: ["Hawlucha-Mega-Ausma", "Hawlucha-Mega-BlueRay", "Hawlucha-Mega-Magmajudis"],
		formeOrder: ["Hawlucha", "Hawlucha-Mega-Ausma", "Hawlucha-Mega-BlueRay", "Hawlucha-Mega-Magmajudis"],
	},
	hawluchamegaausma: {
		num: 701,
		name: "Hawlucha-Mega-Ausma",
		baseSpecies: "Hawlucha",
		forme: "Mega-Ausma",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 78, atk: 102, def: 105, spa: 74, spd: 103, spe: 128},
		abilities: {0: "Luchador's Ring"},
		heightm: 0.8,
		weightkg: 21.5,
		color: "Green",
		eggGroups: ["Flying", "Human-Like"],
		requiredItem: "Ausma",
	},
	hawluchamegablueray: {
		num: 701,
		name: "Hawlucha-Mega-BlueRay",
		baseSpecies: "Hawlucha",
		forme: "Mega-BlueRay",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 78, atk: 112, def: 110, spa: 84, spd: 88, spe: 128},
		abilities: {0: "Masquerade"},
		heightm: 0.8,
		weightkg: 21.5,
		color: "Green",
		eggGroups: ["Flying", "Human-Like"],
		requiredItem: "BlueRay",
	},
	hawluchamegamagmajudis: {
		num: 701,
		name: "Hawlucha-Mega-Magmajudis",
		baseSpecies: "Hawlucha",
		forme: "Mega-Magmajudis",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 78, atk: 110, def: 75, spa: 104, spd: 73, spe: 160},
		abilities: {0: "KO"},
		heightm: 0.8,
		weightkg: 21.5,
		color: "Green",
		eggGroups: ["Flying", "Human-Like"],
		requiredItem: "Magmajudis",
	},
};

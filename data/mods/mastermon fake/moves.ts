export const Moves: { [k: string]: ModdedMoveData; } = {
	vulcaniser: {
		num: 920,
		accuracy: 100,
		basePower: 160,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower * pokemon.hp / pokemon.maxhp;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Vulcaniser",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
	},
};

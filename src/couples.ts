export function shuffleArray<T>(array: T[]): T[] {
    let arrayCpy = [...array];

    for (let i = arrayCpy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCpy[i], arrayCpy[j]] = [arrayCpy[j], arrayCpy[i]];
    }

    return arrayCpy;
}

export function randomValue<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function genCouples(group1: string[], group2: string[]): { 1: string, 2: string }[] {
    let couples: { 1: string, 2: string }[] = [];

    let group1Cpy = shuffleArray(group1);
    let group2Cpy = shuffleArray(group2);

    while (group1Cpy.length > group2Cpy.length) {
        group2Cpy.push(randomValue(group2));
    }

    for (let i = 0; i < group1Cpy.length; i++) {
        let couple = { 1: group1Cpy[i], 2: group2Cpy[i] };

        while (couple[1] === couple[2]) {
            group2Cpy[i] = randomValue(group2);
            couple = { 1: group1Cpy[i], 2: group2Cpy[i] };
        }

        couples.push(couple);
    }

    return couples;
}

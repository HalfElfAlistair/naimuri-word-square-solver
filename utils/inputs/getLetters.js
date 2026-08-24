export const getLetters = (rl, size) => {
    return new Promise((resolve) => {
        rl.question(`Enter ${size ** 2} letters: `, (letters) => {
            // checks amount of letters and repeats question if not square of number input
            if (letters.length !== size ** 2) {
                console.log(`Invalid input: you entered ${letters.length} letters but need ${size ** 2}.`);
                resolve(getLetters(rl, size));
            }
            resolve(letters);
        })
    })
}
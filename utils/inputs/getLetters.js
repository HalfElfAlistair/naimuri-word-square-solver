export const getLetters = (rl, size) => {
    return new Promise((resolve) => {
        rl.question(`Enter ${size ** 2} letters: `, (letters) => {
            resolve(letters);
        })
    })
}
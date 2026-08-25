export const getLetters = (rl, size) => {
    return new Promise((resolve) => {
        rl.question(`Enter ${size ** 2} letters: `, (letters) => {
            const regexp = new RegExp('^[a-zA-Z]' + '{' + size ** 2 + '}$');
            // checks input contains only letters, with the correct amount, and retries if false
            if (!regexp.test(letters)) {
                console.log(`Invalid input: you must enter ${size ** 2} letters, no numbers or special characters.`);
                resolve(getLetters(rl, size));
            }
            resolve(letters.toLowerCase());
        })
    })
}
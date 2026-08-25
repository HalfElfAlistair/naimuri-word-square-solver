export const lettersFilter = (letters, words) => {
    return words.filter(word => {
        let keepWord = true;
        let availableLetters = [...letters];
        const wordArray = word.split("");
        wordArray.forEach(letter => {
            const letterIndex = availableLetters.indexOf(letter);
            if (letterIndex < 0) {
                keepWord = false;
            } else {
                availableLetters.splice(letterIndex, 1);
            }
        });
        return keepWord;
    });
}
export const validWordCheck = (word, frequency) => {
    // loops through letters in a word, removing from frequency map copy if present or returning false if not
    const remainingLettersAvailable = { ...frequency };
    for (const letter of word) {
        if (!remainingLettersAvailable[letter]) return false;
        remainingLettersAvailable[letter]--;
    }
    // if all letters in word are currently available, return true as a valid candidate word
    return true;
};
export const subtractLetters = (frequency, word) => {
    // loops through each letter in a word and removes it from the dynamic letter frequency map
    const updatedLettersFrequency = { ...frequency };
    for (const letter of word) {
        updatedLettersFrequency[letter]--;
    }
    return updatedLettersFrequency;
};
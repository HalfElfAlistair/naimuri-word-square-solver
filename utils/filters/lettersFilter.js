import { getLettersFrequency } from "../getLettersFrequency.js";

export const lettersFilter = (letters, words) => {

    const lettersFrequency = getLettersFrequency(letters);

    return words.filter(word => {
        const frequencyCopy = { ...lettersFrequency };

        // loop through word and filter out if letter isn't in frequency array copy. If it is present, decrease the value of the letter in frequencyCopy
        for (const letter of word) {
            if (!frequencyCopy[letter]) return false;
            frequencyCopy[letter]--;
        }

        return true;
    });
}
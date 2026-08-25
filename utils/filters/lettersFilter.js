export const lettersFilter = (letters, words) => {

    // Creates an object to show the frequency of each letter
    const getLettersFrequency = () => {
        const frequency = {};
        for (const letter of letters) {
            // if letter hasn't been added yet, set as 0. Increment letter value by one.
            frequency[letter] = (frequency[letter] || 0) + 1;
        }
        return frequency;
    };

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

lettersFilter("eeeeddoonnnsssrv", ["rose", "oven", "send", "ends"])
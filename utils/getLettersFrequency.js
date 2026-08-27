export const getLettersFrequency = (letters) => {
    // counts each letter and logs to a frequency map object
    const frequency = {};
    for (const letter of letters) {
        // if letter hasn't been added yet, set as 0. Increment letter value by one.
        if (!frequency[letter]) {
            frequency[letter] = 0;
        }
        frequency[letter]++;
    }
    return frequency;
};
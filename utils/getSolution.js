import { lengthFilter } from './filters/lengthFilter.js';
import { lettersFilter } from './filters/lettersFilter.js';

export const getSolution = (size, letters, words) => {
    const filteredWordsByLength = lengthFilter(size, words);
    const filteredWordsByLetters = lettersFilter(letters, filteredWordsByLength);

    if (filteredWordsByLetters.length < size) {
        return 'A word square was not achievable, with the size and letters provided.';
    }

    return filteredWordsByLetters;
}
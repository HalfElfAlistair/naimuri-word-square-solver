import { lengthFilter } from './filters/lengthFilter.js';
import { lettersFilter } from './filters/lettersFilter.js';
import { getLettersFrequency } from './getLettersFrequency.js';
import { subtractLetters } from './subtractLetters.js';
import { buildSquare } from './buildSquare.js';
import { createTrie } from './trie/createTrie.js';

export const getSolution = (size, letters, words) => {
    const filteredWordsByLength = lengthFilter(size, words);
    const filteredWordsByLetters = lettersFilter(letters, filteredWordsByLength);

    if (filteredWordsByLetters.length < size) {
        return 'A word square was not achievable, with the size and letters provided.';
    }

    const trie = createTrie();

    // goes through each remaining word (after filters) and updates trie root with prefixes and matching words
    filteredWordsByLetters.forEach(word => trie.updateRoot(word));

    // creates dynamic letter frequency map
    const allLettersFrequency = getLettersFrequency(letters);

    // loop through words
    for (const word of filteredWordsByLetters) {
        // gets an updated version of the letter frequencies, with those in this word removed
        const lettersLeft = subtractLetters(allLettersFrequency, word);

        // runs the recursive buildSquare process to complete the square
        const wordSquare = buildSquare([word], size, lettersLeft, trie);
        if (wordSquare) {
            return wordSquare;
        }
    }
    return 'A word square was not achievable, with the size and letters provided.';
}
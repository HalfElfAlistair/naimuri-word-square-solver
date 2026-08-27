import { getColumnPrefix } from './getColumnPrefix';
import { validWordCheck } from './validWordCheck';
import { subtractLetters } from './subtractLetters';

export const buildSquare = (rows, size, lettersLeft, trie) => {
    // if the square has been successfully filled, return the array of rows and end the process
    if (rows.length === size) return rows;

    // produces a prefix to ensure the next word will correctly mirror both row and column position
    const prefix = getColumnPrefix(rows);
    // uses trie to select words matching the prefix
    const candidates = trie.getWordsWithPrefix(prefix);

    for (const word of candidates) {
        // checks letter frequency map to see if word can be made with what remains, skips word if invalid
        if (!validWordCheck(word, lettersLeft)) continue;

        // if valid word, removes letters from dynamic frequency map
        const newLetters = subtractLetters(lettersLeft, word);

        // recursively runs process again, with updated letter frequency map and word added to rows array
        const result = buildSquare([...rows, word], size, newLetters, trie);
        // return if the result is a valid square
        if (result) return result;
    }
    // returns null if the build fails, process can begin again with a new word at the previous level
    return null;
};
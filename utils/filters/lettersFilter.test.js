import { describe, it, expect } from 'vitest';
import { lettersFilter } from './lettersFilter';

describe("lettersFilter", () => {
    const words = [
        "back",
        "tack",
        "milk",
        "then",
        "this",
        "that",
        "rose",
        "oven",
        "send",
        "ends",
        "verv"
    ];

    const letters = "eeeeddoonnnsssrv";

    it("returns an array", async () => {
        const filteredWords = await lettersFilter(letters, words);
        expect(Array.isArray(filteredWords)).toBe(true);
    })

    it("returns an array with only words which contain letters available from the letters input", async () => {
        const filteredWords = await lettersFilter(letters, words);
        expect(filteredWords.length).toBe(4);
    })

    it("returns the correct words that match the available letters", async () => {
        const filteredWords = await lettersFilter(letters, words);
        expect(filteredWords).toStrictEqual(["rose", "oven", "send", "ends",]);
    })
})
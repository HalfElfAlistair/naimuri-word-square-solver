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
        "Ends"
    ];

    const letters = "eeeeddoonnnsssrv";

    it("returns an array", async () => {
        const filteredWords = await lettersFilter(letters, words);
        expect(Array.isArray(filteredWords)).toBe(true);
    })
})
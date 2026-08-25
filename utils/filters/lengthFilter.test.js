import { describe, it, expect } from 'vitest';
import { lengthFilter } from './lengthFilter';

describe("lengthFilter", () => {
    const words = [
        "word",
        "test",
        "and",
        "of",
        "something",
        "array"
    ];

    it("returns an array", async () => {
        const filteredWords = await lengthFilter(4, words);
        expect(Array.isArray(filteredWords)).toBe(true);
    })

    it("returns an array with only words where the length matches the size input", async () => {
        const filteredWords = await lengthFilter(4, words);
        expect(filteredWords.length).toBe(2);
    })

    it("returns words in array that are the correct length", async () => {
        const filteredWords = await lengthFilter(4, words);
        expect(filteredWords.every(word => word.length === 4)).toBe(true);
    })
})
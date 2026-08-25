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
})
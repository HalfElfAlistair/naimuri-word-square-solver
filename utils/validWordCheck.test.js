import { describe, it, expect } from 'vitest'
import { validWordCheck } from './validWordCheck';

describe("validWordCheck", () => {
    it("returns a boolean", async () => {
        const word = "rose"
        const frequency = {
            e: 4,
            d: 2,
            o: 2,
            n: 3,
            s: 3,
            r: 1,
            v: 1
        };
        const isWordValid = validWordCheck(word, frequency);
        expect(typeof isWordValid).toBe("boolean");
    })
    it("returns true if word letters are available in frequency map", async () => {
        const word = "rose"
        const frequency = {
            e: 4,
            d: 2,
            o: 2,
            n: 3,
            s: 3,
            r: 1,
            v: 1
        };
        const isWordValid = validWordCheck(word, frequency);
        expect(isWordValid).toBe(true);
    })
})
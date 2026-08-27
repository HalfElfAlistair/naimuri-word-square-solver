import { describe, it, expect } from 'vitest'
import { subtractLetters } from './subtractLetters';

describe("subtractLetters", () => {
    it("returns an object", async () => {
        const originalFrequency = {
            e: 4,
            d: 2,
            o: 2,
            n: 3,
            s: 3,
            r: 1,
            v: 1
        };
        const word = "rose";
        const expectedFrequency = {
            e: 3,
            d: 2,
            o: 1,
            n: 3,
            s: 2,
            r: 0,
            v: 1
        }
        const newFrequency = subtractLetters(originalFrequency, word);
        expect(typeof newFrequency).toBe("object");
    })

    it("returns correct frequency values after update", async () => {
        const originalFrequency = {
            e: 4,
            d: 2,
            o: 2,
            n: 3,
            s: 3,
            r: 1,
            v: 1
        };
        const word = "rose";
        const expectedFrequency = {
            e: 3,
            d: 2,
            o: 1,
            n: 3,
            s: 2,
            r: 0,
            v: 1
        }
        const newFrequency = subtractLetters(originalFrequency, word);
        expect(newFrequency).toEqual(expectedFrequency);
    })
})
import { describe, it, expect } from 'vitest';
import { getLettersFrequency } from './getLettersFrequency';

describe("getLettersFrequency", () => {
    it("returns an object", async () => {
        const lettersFrequency = getLettersFrequency("eeeeddoonnnsssrv");
        expect(typeof lettersFrequency).toBe("object");
    })

    it("returns an object with a property for each unique letter, which details the number of times the letter is represented in the input", async () => {
        const lettersFrequency = getLettersFrequency("eeeeddoonnnsssrv");
        const expectedFrequency = {
            e: 4,
            d: 2,
            o: 2,
            n: 3,
            s: 3,
            r: 1,
            v: 1
        }
        expect(lettersFrequency).toEqual(expectedFrequency);
    })
})
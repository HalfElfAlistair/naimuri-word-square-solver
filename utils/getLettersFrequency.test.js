import { describe, it, expect } from 'vitest';
import { getLettersFrequency } from './getLettersFrequency';

describe("getLettersFrequency", () => {
    it("returns an object", async () => {
        const lettersFrequency = getLettersFrequency("eeeeddoonnnsssrv");
        expect(typeof lettersFrequency).toBe("object");
    })
})
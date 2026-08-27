import { describe, it, expect } from 'vitest';
import { getSolution } from './getSolution';
import { words } from '../words';

describe("getSolution", () => {
    it("returns an array", async () => {
        const wordsList = ["rose", "oven", "send", "ends"];
        const solution = await getSolution(4, "eeeeddoonnnsssrv", wordsList);
        expect(Array.isArray(solution)).toBe(true);
    })

    it("returns a message advising that the square can't be completed if there are less words available than the size input", async () => {
        const wordsList = ["rose", "oven", "send"];
        const solution = await getSolution(4, "eeeeddoonnnsssrv", wordsList);
        expect(solution).toBe("A word square was not achievable, with the size and letters provided.");
    })
})
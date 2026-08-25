import { describe, it, expect } from 'vitest';
import { getSolution } from './getSolution';

describe("getSolution", () => {
    it("returns an array", async () => {
        const solution = await getSolution(4, "eeeeddoonnnsssrv");
        expect(Array.isArray(solution)).toBe(true);
    })
})
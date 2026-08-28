import { describe, it, expect } from 'vitest'
import { getColumnPrefix } from './getColumnPrefix.js';

describe("getColumnPrefix", () => {
    it("returns a string", async () => {
        const rows = ["rose"];
        const prefix = await getColumnPrefix(rows);
        expect(typeof prefix).toBe("string");
    });

    it("returns correct prefix for next word", async () => {
        const rows = ["rose", "oven"];
        const prefix = await getColumnPrefix(rows);
        expect(prefix).toBe("se");
    });
})

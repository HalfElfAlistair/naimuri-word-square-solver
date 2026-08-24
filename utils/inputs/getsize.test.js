import { describe, it, expect } from 'vitest';
import { getSize } from './getSize';

// mocks input stage
const mockRl = (inputs) => {
  return {
    // unused argument to ignore prompt
    question(_, callback) {
        // returns first item from input array
        callback(inputs.shift());
    },
    close() {}
  };
}

describe("getSize", () => {
    it("returns a number", async () => {
        const rl = mockRl(["4"]);
        const size = await getSize(rl);
        expect(typeof size).toBe("number");
    });

    it("returns an integer", async () => {
        const rl = mockRl(["4.4"]);
        const size = await getSize(rl);
        expect(size).toBe(4);
    });

    it("retries if NaN and returns an integer on second attempt", async () => {
        const rl = mockRl(["A", "4"]);
        const size = await getSize(rl);
        expect(size).toBe(4);
    });

    it("retries if negative integer and returns a positive one on second attempt", async () => {
        const rl = mockRl(["-4", "4"]);
        const size = await getSize(rl);
        expect(size).toBe(4);
    });

})
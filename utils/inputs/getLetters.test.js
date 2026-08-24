import { describe, it, expect } from 'vitest';
import { getLetters } from './getLetters.js';

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

describe("getLetters", () => {
    it("returns a string", async () => {
        const rl = mockRl(["eeeeddoonnnsssrv"]);
        const letters = await getLetters(rl, 4);
        expect(typeof letters).toBe("string");
    });

    it("retries if amount of letters doesn't match size squared and returns correct amount on second attempt", async () => {
        const rl = mockRl(["eeee", "eeeeddoonnnsssrv"]);
        const letters = await getLetters(rl, 4);
        expect(letters).toBe("eeeeddoonnnsssrv");
    });

    it("retries if letters contains invalid characters like numbers or punctuation returns correct input on second attempt", async () => {
        const rl = mockRl(["eeeedd00nnnsssr^", "eeeeddoonnnsssrv"]);
        const letters = await getLetters(rl, 4);
        expect(letters).toBe("eeeeddoonnnsssrv");
    });
})
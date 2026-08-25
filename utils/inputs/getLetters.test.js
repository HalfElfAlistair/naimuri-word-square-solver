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

    it("retries if amount of letters doesn't match size squared and returns correct amount on valid attempt", async () => {
        const rl = mockRl(["eeee", "eeeeddoonnnsssrvaaa", "eeeeddoonnnsssrv"]);
        const letters = await getLetters(rl, 4);
        expect(letters).toBe("eeeeddoonnnsssrv");
    });

    it("retries if letters contains special characters or numbers, returns correct input on valid attempt", async () => {
        const rl = mockRl(["eeeeddoonnnss$rv", "eeeedd0onnnsssrv", "eeeeddoonnnsssrv"]);
        const letters = await getLetters(rl, 4);
        expect(letters).toBe("eeeeddoonnnsssrv");
    });
})
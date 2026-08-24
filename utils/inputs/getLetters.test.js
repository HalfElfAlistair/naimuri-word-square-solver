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
})
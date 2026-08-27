import { describe, it, expect } from 'vitest'
import { buildSquare } from './buildSquare';
import { createTrie } from './trie/createTrie';

describe("buildSquare", () => {
    it("returns an array", async () => {
        const lettersLeft = {
            e: 3,
            d: 2,
            o: 1,
            n: 3,
            s: 2,
            r: 0,
            v: 1
        }
        const trie = createTrie();
        ["rose", "roll", "oven", "over", "send", "ends"].forEach(word => {
            trie.updateRoot(word);
        })
        const wordSquare = await buildSquare(["rose"], 4, lettersLeft, trie);
        expect(Array.isArray(wordSquare)).toBe(true);
    })
})

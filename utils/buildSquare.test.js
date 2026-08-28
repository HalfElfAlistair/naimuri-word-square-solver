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

    it("returns an array the same length as the required square size", async () => {
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
        const size = 4;
        const wordSquare = await buildSquare(["rose"], size, lettersLeft, trie);
        expect(wordSquare.length).toBe(size);
    })

    it("builds a correct word square for the provided input", async () => {
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
        const size = 4;
        const wordSquare = await buildSquare(["rose"], size, lettersLeft, trie);
        expect(wordSquare).toEqual(["rose", "oven", "send", "ends"]);
    });

    it("returns null when no valid square can be built", async () => {
        const lettersLeft = {
            e: 1,
            d: 0,
            o: 1,
            n: 0,
            s: 1,
            r: 0,
            v: 0
        }
        const trie = createTrie();
        ["rose", "roll", "oven", "over", "send", "ends"].forEach(word => {
            trie.updateRoot(word);
        })
        const size = 4;
        const wordSquare = await buildSquare(["rose"], size, lettersLeft, trie);

        expect(wordSquare).toBeNull();
    });

    it("does not use letters more times than available", async () => {
        const lettersLeft = {
            e: 2,
            d: 2,
            o: 1,
            n: 2,
            s: 2,
            r: 0,
            v: 1
        }
        const trie = createTrie();
        ["rose", "roll", "oven", "over", "send", "ends"].forEach(word => {
            trie.updateRoot(word);
        })
        const size = 4;
        const wordSquare = await buildSquare(["rose"], size, lettersLeft, trie);

        expect(wordSquare).toBeNull();
    });

    it("builds a 5x5 square", async () => {
        const lettersLeft = {
            a: 1,
            b: 2,
            e: 7,
            h: 0,
            m: 1,
            o: 1,
            s: 1,
            r: 3,
            u: 1,
            t: 1,
            v: 2
        }
        const trie = createTrie();
        ["heart", "venue", "ember", "steer", "above", "revue", "faint", "trees"].forEach(word => {
            trie.updateRoot(word);
        })
        const size = 5;
        const wordSquare = await buildSquare(["heart"], size, lettersLeft, trie);

        expect(wordSquare).toEqual(["heart", "ember", "above", "revue", "trees"]);
    });

    it("returns a valid square when multiple squares exist", async () => {
        const lettersLeft = {
            a: 2,
            e: 3,
            f: 0,
            h: 2,
            m: 1,
            o: 2,
            n: 1,
            s: 1,
            r: 4,
            t: 3,
            w: 1
        }
        const trie = createTrie();
        ["steno", "feast", "earth", "steer", "armor", "stone", "armer", "threw"].forEach(word => {
            trie.updateRoot(word);
        })
        const size = 5;
        const wordSquare = await buildSquare(["feast"], size, lettersLeft, trie);

        expect(wordSquare).toEqual(["feast", "earth", "armor", "stone", "threw"]);
    });



})

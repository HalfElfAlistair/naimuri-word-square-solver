import { describe, it, expect } from 'vitest';
import { createTrie } from './createTrie';

describe("updateRoot", () => {
    it("adds a word to the tree", async () => {
        const trie = createTrie();
        trie.updateRoot("rose");

        expect(trie.root.children.r).toBeDefined();
        expect(trie.root.children.r.children.o).toBeDefined();
        expect(trie.root.children.r.children.o.children.s).toBeDefined();
        expect(trie.root.children.r.children.o.children.s.children.e).toBeDefined();

        expect(trie.root.children.r.words).toContain("rose");
        expect(trie.root.children.r.children.o.words).toContain("rose");
        expect(trie.root.children.r.children.o.children.s.words).toContain("rose");
        expect(trie.root.children.r.children.o.children.s.children.e.words).toContain("rose");
    })

    it("handles multiple words with the same prefix", () => {
        const trie = createTrie();
        trie.updateRoot("oven");
        trie.updateRoot("over");

        const o = trie.root.children.o;
        const ov = o.children.v;
        const ove = ov.children.e;

        expect(o.words).toEqual(["oven", "over"]);
        expect(ov.words).toEqual(["oven", "over"]);
        expect(ove.words).toEqual(["oven", "over"]);

        expect(ove.children.n.words).toEqual(["oven"]);
        expect(ove.children.r.words).toEqual(["over"]);
    });
})

describe("getWordsWithPrefix", () => {
    it("returns an array", async () => {
        const trie = createTrie();
        trie.updateRoot("rose");
        const words = await trie.getWordsWithPrefix("ro");
        expect(Array.isArray(words)).toBe(true);
    })

    it("returns words matching a given prefix", () => {
        const trie = createTrie();
        trie.updateRoot("rose");
        trie.updateRoot("road");
        trie.updateRoot("robs");

        expect(trie.getWordsWithPrefix("ro")).toEqual(["rose", "road", "robs"]);
        expect(trie.getWordsWithPrefix("ros")).toEqual(["rose"]);
    });

    it("returns an empty array for unknown prefixes", () => {
        const trie = createTrie();
        trie.updateRoot("rose");

        expect(trie.getWordsWithPrefix("z")).toEqual([]);
        expect(trie.getWordsWithPrefix("rot")).toEqual([]);
    });
})
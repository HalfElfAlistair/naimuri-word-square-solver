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
})
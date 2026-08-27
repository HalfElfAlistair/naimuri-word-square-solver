export const createTrie = () => {
  const root = { children: {}, words: [] };

  const updateRoot = (word) => {
    // node for this word becomes a reference to root, so mutatable, not just a copy
    let node = root;
    // loops through word and updates children property of root node
    for (const letter of word) {
      if (!node.children[letter]) {
        // if current letter isn't already a key in root.children, the key is created, with a fresh node object as the value
        node.children[letter] = { children: {}, words: [] };
      }
        // node becomes the property just added (so root.children[letter]). When moving to the next letter, that becomes a child of the previous letter. E.g. in 'rose' 'o' now becomes a child of 'r'.
        node = node.children[letter];
        // updates words property of new node with the word
        node.words.push(word);
    }
  };

  const getWordsWithPrefix = (prefix) => {
    return;
  };

  return { updateRoot, root };
};

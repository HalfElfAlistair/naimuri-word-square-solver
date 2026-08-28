import { words } from '../words.js';

export const fetchDictionary = async () => {
  // fetches words dictionary from API endpoint, converts it to a string and then to an array of word strings
  const response = await fetch("https://www.norvig.com/ngrams/enable1.txt");
  console.log('response', response)
  // if api request fails, load from static dictionary file
  if (response && response.status === 200) {
    const text = await response.text();
    return text.split("\n");
  } else {
    return words;
  }
};

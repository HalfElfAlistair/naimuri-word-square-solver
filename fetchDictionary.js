export const fetchDictionary = async () => {
    // fetches words dictionary from API endpoint, converts it to a string and then to an array of word strings
  const response = await fetch("https://www.norvig.com/ngrams/enable1.txt");
  const text = await response.text();
  return text.split("\n");
};

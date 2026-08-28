import readline from "node:readline";
import { getSize } from './utils/inputs/getSize.js';
import { getLetters } from "./utils/inputs/getLetters.js";
import { getSolution } from "./utils/getSolution.js";
import { fetchDictionary } from "./utils/fetchDictionary.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runProcess = async () => {
    const size = await getSize(rl);
    const letters = await getLetters(rl, size);

    console.log(`Attempting to solve ${size} x ${size} word square puzzle with the following letters: ${letters}`);
    console.log('...')
    console.log('...')
    console.log('...')

    const words = await fetchDictionary();
    console.log('words count: ', words.length);
    
    const result = getSolution(size, letters, words);
    console.log(result);

    rl.close();
}

runProcess();
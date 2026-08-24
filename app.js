import readline from "node:readline";
import { getSize } from './utils/inputs/getSize.js';
import { getLetters } from "./utils/inputs/getLetters.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runProcess = async () => {
    const size = await getSize(rl);
    const letters = await getLetters(rl, size);

    rl.close();
}

runProcess();
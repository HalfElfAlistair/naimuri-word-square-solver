import readline from "node:readline";
import { getSize } from './utils/inputs/getSize.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runProcess = async () => {
    const size = await getSize(rl);

    rl.close();
}

runProcess();
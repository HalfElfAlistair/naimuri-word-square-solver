import { createInterface } from 'readline';

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runProcess = async () => {
    console.log('hello world')
    rl.close();
}

runProcess();
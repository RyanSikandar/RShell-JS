const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  rl.close();
  //Printing invalid command for every command for now
  console.log(`${answer}: command not found\n`);
});

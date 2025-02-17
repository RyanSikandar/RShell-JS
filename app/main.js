const { exit } = require("process");
const readline = require("readline");

//We are creating an interface for the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

//using prompt to display the prompt message
rl.prompt();

//using the on method to listen for the line event
rl.on("line", (input) => {
  if (input.startsWith("exit")) {
    exit(0)
  }
  console.log(`${input}: command not found`);
  rl.prompt();
})


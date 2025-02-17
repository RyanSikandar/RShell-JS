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
    //If the input starts with exit, the program will exit
    exit(0)
  }
  //Implementing the Echo command
  if (input.includes("echo")) {
    //The echo command will print the input without the echo
    console.log(input.replace("echo", "").trim());
    rl.prompt();
    return;
  }
  console.log(`${input}: command not found`);
  rl.prompt();
})


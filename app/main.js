const { exit } = require("process");
const readline = require("readline");
const fs = require("fs");
//We are creating an interface for the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

//using prompt to display the prompt message
rl.prompt();

const findPath = (type) => {
  const paths = process.env.PATH.split(":");
  let found = false;
  paths.forEach((path) => {
    const commandPath = path + "/" + type;
    if (!found && fs.existsSync(commandPath)) {
      console.log(`${type} is ${commandPath}`);
      found = true;
    }
  });
  if (!found) {
    console.log(`${type}: not found`);
  }
}
const checkType = (input) => {
  const type = input.split(" ")[1];
  if (type === 'echo' || type === 'exit' || type === 'type') {
    console.log(`${type} is a shell builtin`);
    rl.prompt();
  } else {
    findPath(type);
    rl.prompt();
  }
}

//using the on method to listen for the line event
rl.on("line", (input) => {
  if (input.startsWith("type")) {
    checkType(input);
  }
  else if (input.startsWith("exit")) {
    //If the input starts with exit, the program will exit
    exit(0)

  }
  //Implementing the Echo command
  else if (input.includes("echo")) {
    //The echo command will print the input without the echo
    console.log(input.replace("echo", "").trim());
    rl.prompt();
  }
  else {
    console.log(`${input}: command not found`);
    rl.prompt();

  }
})


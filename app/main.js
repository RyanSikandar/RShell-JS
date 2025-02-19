const { exit } = require("process");
const readline = require("readline");
const fs = require("fs");
const { exec } = require("child_process");

//We are creating an interface for the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

//using prompt to display the prompt message
rl.prompt();

//Function to execute the executable file 
function executeFile(input) {
 const command = input.split(" ")[0];
  const args = input.split(" ").slice(1);
  exec(`${command} ${args.join(" ")}`, (error, stdout) => {
    if (error) {
      console.log(`${command}: not found`);
      rl.prompt();
    }else{
      console.log(stdout);
      rl.prompt();
    }
   
  });
}

//Function to find the path of the executable file in the PATH
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

//Function to check the type of the command and print the result
const types = ['echo', 'exit', 'type'];
const checkType = (input) => {
  const type = input.split(" ")[1];
  if (types.includes(type)) {
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
    executeFile(input);
  }
})


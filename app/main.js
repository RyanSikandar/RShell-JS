const readline = require("readline");

//We are creating an interface for the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();

rl.on("line",(input)=>{
  console.log(`${input}: command not found`);
  rl.prompt();
})

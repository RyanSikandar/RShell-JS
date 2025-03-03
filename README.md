# Shell Implementation in Node.js

This repository contains a simple shell implementation written in Node.js. The shell supports basic commands like `echo`, `cd`, `pwd`, `type`, and executing external commands from the system's PATH. It also includes features like Git Support (and other executables in PATH), command completion, handling of special characters, and output redirection.

## Features

- **Command Completion**: The shell provides command completion for built-in commands and external executables in the system's PATH.
- **Special Character Handling**: The shell handles special characters like backslashes (`\`), quotes (`"` and `'`), and spaces within commands.
- **Output Redirection**: The shell supports output redirection using `>`, `>>`, `1>`, `1>>`, `2>`, and `2>>` operators.
- **Built-in Commands**:
  - `echo`: Prints the provided arguments to the console or redirects them to a file.
  - `cd`: Changes the current working directory.
  - `pwd`: Prints the current working directory.
  - `type`: Checks if a command is a shell built-in or an external executable.
  - `exit`: Exits the shell.
    and more.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RyanSikandar/RShell-JS.git
2. Run it with node
   ```bash
   node app/main.js
3. Start Using it !!!

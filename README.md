# Naimuri Coding Challenge — Word Square

A Node JS command line program, to solve word square puzzles.

It takes two inputs: a number for the size of the square and the letters to be used to form the words within it.

The program will return a completed word square, using the letters provided, or a message explaining that a square can't be built from the inputs.

## Tech Stack

- Node

- JavaScript

- Vitest

## Testing

The project uses Vitest for unit testing the following functions:

### Inputs

- GetSize: tests the size input is a valid, positive, integer with whitespace removed.

- GetLetters: tests the letters input is a string of letters, no numbers, whitespace, or special characters. It must also meet the size parameter, e.g. if the size input is 4 there must be 16 letters exactly in the string.

### Filters

- lengthFilter: tests the filter has returned an array of strings with a length that matches the size parameter.

- lettersFilter: tests the filter returns an array of word strings which are compiled using only letters available from the letters input.

### Trie

- updateRoot: tests the updater function adds each relevant prefix from a word argument, with the possible word or words that can be made from said prefix alonside each one.

- getWordsWithPrefix: tests the function for checking a prefix from the Trie, it should return an array with words relevant to that prefix, or an empty one if there are none.

### Solution/Square Build Process

- getLettersFrequency: tests function which should return an object, mapping each letter with the number of times it is in the input string

- getColumnPrefix: tests return of prefix string which decides the next word in the process

- validWordCheck: tests function that should return true if a word can be made from the remaining letters in a frequency map

- subtractLetters: tests function returns an updated frequency map, with the values decreased respective to the word used

- buildSquare: tests return is an array with a length that matches the size parameter, builds a square that correctly mirrors rows and columns, returns null when no square can be built or would need more letters than available, produces a valid square at different size inputs (scalable), produces only one valid square solution when multiple possible solutions exist.

- getSolution: tests return of the word square solition if successful, or a valid failure statement where necessary.


## Running the Project

### Prerequisites

Before running the project, you’ll need:

1. Node.js (version 20 or later)  

Node provides the JavaScript runtime and includes built‑in features used in this project (such as fetch and readline).
You can download it from: [https://nodejs.org/en/download](https://nodejs.org/en/download)

The program will work on v18 but the tests will not

To confirm Node is installed correctly, run:

node -v

You should see a version number (e.g. v20.0.0).


2. npm (comes bundled with Node) 

npm is Node’s package manager. It installs the project’s dependencies.

Check it with:

npm -v


### Clone the Repository

Open a terminal and run:

git clone https://github.com/HalfElfAlistair/naimuri-word-square-solver.git
cd naimuri-word-square-solver



### Install dependencies:

This project uses a small number of development dependencies (for testing).
Install everything with:

npm install

This creates a node_modules folder and ensures the project can run and test correctly.


### Running the Application:

#### To start the program:

Use the following command for most versions of node:

npm start

When using node v22+ you may also use:

node --run start

Once running, you’ll be prompted to enter:

The size of the word square (e.g., 4)

The letters available for the puzzle (e.g., eeeeddonnnsssrv)

The program will then:

- filter the dictionary

- build the Trie

- run the backtracking solver

- output either a valid word square or a message explaining that no square is possible

### Running Tests:

All tests are written using Vitest.

Run the full test suite with:

npm test

### Troubleshooting:

#### Node not found?  

Make sure Node is installed and added to your system PATH.
Restart your terminal after installation.

#### Using an older Node version?  

Node 20+ is required because the project uses built‑in fetch.
Upgrade at: https://nodejs.org/en/download


## Notes

### Process

The instructions for this were intended to use Java, and while I'm keen to learn Java, I felt this was not the time to do that. I was advised I could use whatever I wanted so I went with Node and JavaScript for familiarity.

I haven't programmed for the command line since I was a bootcamp student, so I needed a refresh on that, which is essentially where my process started for this task. It was something I've been thinking about dipping back into so I'm glad I got to do this task, I've a personal project in mind that I'll be using this experience to shape at some point.

Having got the hang of setting up a CLI program, I started writing tests, with a priority on managing the inputs (square size and letters). Controlling what a user can enter is very important, and while this is just a test without any sensitive data to be obtained, I thought it would be good practice to ensure the information entered was going to be valid for the puzzle to be attempted.

Solving the algorithm itself was going to be the big challenge for me, I had no idea initially as to how to go about this. My first thoughts were filtering down the 100k+ words from the dictionary API provided. I did some research on what was required for solving something like this and found a Trie was the suggested approach. It wasn't something I'd used before, so had to research how it works and how to implement.

I also wondered about the diagonal letters, with any individual letters provided, plus odd counts for multiple ones, being guaranteed for the diagonal cells in the square. This didn't translate well algorithmically though, so I gave up on the idea after some thought and experimentation. Eventually I ended up using a system that puts the letters into a frequency map and subtracts them when a word is added to the square, calculates indexes to acquire a prefix for the next word, then checks the trie to build the square with the corresponding words.

It's been a good learning process to understand how this one can be solved. I've tried to leave various notes explaining the process, in part for anyone reading, but also so I can maintain an understanding of what I've built (particularly with the Trie and algorithmic side where my knowledge isn't as strong).

### AI Usage

I used Copilot for a few tasks here.

- To help me understand the setup and tutorials for building the command line functionality.

- To go through the process of setting up a tree, updating it, and checking prefixes for words.

- For building the word square itself and understanding how the algorithm should work. I was hoping to work this one out myself and enjoyed trying to figure out a solution, but my approaches weren't getting anywhere so I decided I needed help working out where I was going wrong. In production this would have been much a quicker approach to begin with, but for this taks I wanted to take the time to attempt solving the puzzle myself, while time constraints were lesser.

- Helping me write the setup/running parts of this readme.


## Task Instructions

### Coding Challenge
This challenge is to produce a word square. In a word square you are given a grid with letters
arranged that spell valid English language words when you read from left to right or from top to
bottom, with the requirement that the words you spell in each column and row of the same
number are the same word. For example, the first row and the first column spell the same
word, the second row and second column do, too, and so on. The challenge is that in arranging
those letters that you spell valid words that meet those requirements.

One variant is where you're given an n*n grid and asked to place a set of letters inside to meet
these rules, and that’s our challenge: given the grid dimensions and a list of letters, can you
produce a valid word square.

#### Input

You'll be given an integer telling you how many rows and columns (it's a square) to use and
then n2 letters to populate the grid with. Example:

4 eeeeddoonnnsssrv

#### Output

Your program should emit a valid word square with the letters placed to form valid English
language words. Example:

rose
oven
send
Ends


#### Challenge


To write a program to solve the following word squares:

4 aaccdeeeemmnnnoo
5 aaaeeeefhhmoonssrrrrttttw
5 aabbeeeeeeeehmosrrrruttvv
7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy

#### Challenge Solutions (Example)

moan
once
acme
need

feast
earth
armor
stone
threw

heart
ember
above
revue
trees

bravado
renamed
analogy
valuers
amoebas
degrade
odyssey

To ensure valid words, we suggest you may wish to use the following English-language
dictionary http://norvig.com/ngrams/enable1.txt

#### What we are looking for:

Using the Java API and other Java libraries or frameworks, we are looking for a program to solve
these challenges based on the inputs and outputs defined. Your program should run from the
command line and come with some form of documented instructions. As well as a working
algorithm, we are also looking for an elegance of solution, an Object Oriented design approach,
the development approach (TDD?) and use of the APIs and libraries. We also welcome proof
that it works and will ask more about the development approach at an interview. One big hint
is that we find the use of two dimensional arrays as unreadable, as well as unmaintainable. If
you think another technology is preferable, we don’t mind if you can explain why you made
your choice.

You have one week to complete the challenge. Enjoy!
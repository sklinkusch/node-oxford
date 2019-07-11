# node-oxford

This command-line application was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany.

## Features

It uses the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/) to get the dictionary information for a given (British) English word.

## Techniques

- Node.js
- Axios

## Usage

### Setup of the package
1. Clone the repository using ```git clone git@github.com:sklinkusch/node-oxford.git``` (SSH) or ```git clone https://github.com/sklinkusch/node-oxford``` (HTTPS).
1. Move into the directory ```node-oxford``` and run ```npm install``` or ```yarn```.

### Making requests
Within the folder, type
```
node index.js $WORD
```
with ```$WORD``` as a (British) English word.

Example:   
Your input is
```
node index.js fresh
```  
Your output would be:
```
fresh (Adjective)
1. (of food) recently made or obtained
2. not previously known or used
3. full of energy and vigour
4. not salty
5. (of wind) cool
6. newly come from
7. presumptuous in sexual way
8. having unpleasant smell
fresh (Adverb)
1. newly
```
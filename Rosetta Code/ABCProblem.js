// You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

// (B O)
// (X K)
// (D Q)
// (C P)
// (N A)
// (G T)
// (R E)
// (T G)
// (Q D)
// (F S)
// (J W)
// (H U)
// (V I)
// (A N)
// (O B)
// (E R)
// (F S)
// (L Y)
// (P C)
// (Z M)
// Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

// Some rules to keep in mind:

// Once a letter on a block is used, that block cannot be used again.
// The function should be case-insensitive.

function canMakeWord(word) {
  const blocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['T', 'G'],
    ['Q', 'D'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['A', 'N'],
    ['O', 'B'],
    ['E', 'R'],
    ['F', 'S'],
    ['L', 'Y'],
    ['P', 'C'],
    ['Z', 'M'],
  ];
  word = word.toUpperCase().split('');
  for (let letter in word) {
    // We should check if any block contains the desired letter
    const blockIndex = blocks.findIndex(
      (block) => block.indexOf(word[letter]) >= 0
    );
    if (blockIndex === -1) {
      return false;
    } else {
      blocks.splice(blockIndex, 1);
    }
  }
  return true;
}

console.log(canMakeWord('BADM'));
console.log(canMakeWord('BSBS'));

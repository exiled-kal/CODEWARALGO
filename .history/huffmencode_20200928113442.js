// Natural language texts often have a very high frequency of certain letters, in German for example, almost every 5th letter is an E, but only every 500th is a Q. It would then be clever to choose a very small representation for E. This is exactly what the Huffman compression is about, choosing the length of the representation based on the frequencies of the symbol in the text.


// Let's assume we want to encode the word "aaaabcc", then we calculate the frequencies of the letters in the text:

// Symbol	Frequency
// a	4
// b	1
// c	2

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
  
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs,s) {
  
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs,bits) {
  
}
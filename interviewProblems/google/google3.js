// 3) Giving a string such as "This is a string", and list of ranges where you want to apply different styling. 
//   Example input:  [{range: [0, 4], style: "bold"}, {range: [7, 12], style: "yellow"}]/
//   output an object specifying the styled substring, and what proprties applied. 
//   Example output: {
//   "This is": ["bold"],
//   " a ": [],
//   "string": ["yellow"],
// }

// 0123456789
const word = '0123456789';
const styles = [
  { range: [0, 4], style: 'bold' },
  { range: [3, 8], style: 'red' },
  { range: [6, 9], style: 'yellow' }
];
const result = applyStyles(word, styles);

console.log(result);

function applyStyles(sentence, styles) {
  const charMappings = Array(sentence.length).fill().map(() => new Set());
  const output = {};

  for (let { range: [i, end], style } of styles) {

    while (i <= end) {
      charMappings[i].add(style);
      i++;
    }
  }

  let key = sentence[0];
  let wordStyles = [...charMappings[0]];

  for (let i = 1; i < charMappings.length; i++) {
    const setA = charMappings[i - 1];
    const setB = charMappings[i];

    const equal = setsEqual(setA, setB);

    if (equal && i === charMappings.length - 1) {
      output[key] = wordStyles;
    } else if (equal) {
      key += sentence[i];
    } else {
      output[key] = wordStyles;
      key = sentence[i];
      wordStyles = [...charMappings[i]];
    }
  }
  return output;
}

function setsEqual(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (let a of setA) {
    if (!setB.has(a)) return false;
  }
  return true
}
// Pure Function
export default function PureFunction(num) {
  return num * 2;
}

// Bukan Pure Function
let count = 0;
function Increment() {
  count++;
  return count;
}

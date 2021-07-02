
const NOT_PRIME = 'Not prime';
const PRIME = 'Prime';
function primality(n) {
  if (n === 1) return NOT_PRIME;
  if (n === 2) return PRIME;
  if (n % 2 === 0) return NOT_PRIME;
  
  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2)
    if (n % i === 0)
      return NOT_PRIME;

  return PRIME;
}

const n = 7;
console.log(primality(n));

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "hyeonjia";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/(\d+)/g);
    if (numbers) {
      const maxNumber = Math.max(...numbers.map(Number));
      return maxNumber.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/(\d+)/g);
    if (numbers && numbers.length === 2) {
      const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }
  
  if(query.toLowerCase().includes("fibonacci")) {
    const match = query.match(/fibonacci of (\d+)/);
    if (match) {
      const n = parseInt(match[1], 10);  
      if (n <= 0) return "0";
      if (n === 1) return "1";
      let a = 0, b = 1, fib = 1;
      for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
      }
      return fib.toString();
    }
  }

  if(query.toLowerCase().includes("prime")) {
    const match = query.match(/is (\d+) a prime number/);
    if (match) {
      const n = parseInt(match[1], 10); 
      if (n <= 1) return "no";
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "no";
      }
      return "yes";
    }
  }


  return "";

}

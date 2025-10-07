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

  if (query.toLowerCase().includes("Which of the following numbers is the largest")) {
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

  return "";

}

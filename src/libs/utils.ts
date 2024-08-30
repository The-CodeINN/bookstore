export const defaultStroke = (className: string): string =>
  new RegExp("stroke-*", "g").test(className)
    ? ""
    : "stroke-2 stroke-skin-dark";

export const generateUniqueArray = (num: number) => {
  const numbers = new Set<number>();
  while (numbers.size < num) {
    const randomNum = Math.floor(Math.random() * (num - 1 + 1)) + 1;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
};

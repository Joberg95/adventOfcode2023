import fs from "fs/promises";
import path from "path";

function calcSum(input) {
  let sum = 0;
  input.forEach((line) => {
    const firstDigitMatch = line.match(/\d/);
    const firstDigit = firstDigitMatch ? parseInt(firstDigitMatch[0]) : null;

    const lastDigitMatch = line.match(/\d(?=[^\d]*$)/);
    const lastDigit = lastDigitMatch ? parseInt(lastDigitMatch[0]) : null;
    // const lastDigit = lastDigitMatch ? lastDigitMatch[0] : null;

    if (firstDigit && lastDigit) {
      const combinedDigits = parseInt(`${firstDigit}${lastDigit}`, 10);
      sum += combinedDigits;
    }
  });

  return sum;
}

function solvePuzzleSum() {
  const filePath = path.join("assets", "puzzleInput.txt");

  fs.readFile(filePath, { encoding: "utf-8" }).then((data) => {
    const input = data.split("\n");
    const result = calcSum(input);
    console.log("result:", result);
  });
}

solvePuzzleSum();

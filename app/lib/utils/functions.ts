import { Entry, ReadBook } from "./types";

export function calculateAverage(total: number, quantity: number): number {
  return Math.floor(total / quantity);
}

export function calculateTotal(arr: number[]) {
  return arr.reduce((total, num) => {
    return Math.floor(total + num);
  }, 0);
}

export function extractPageNumbersFromArray(
  arr: Entry[] | ReadBook[]
): number[] {
  return arr.reduce((nums: number[], e: Entry) => {
    if (e.number_of_pages != undefined) nums.push(e.number_of_pages);
    return nums;
  }, []);
}

export function filterBooksWithReviews(arr: ReadBook[]) {
  return arr.filter((b) => b.comment && b.rating);
}

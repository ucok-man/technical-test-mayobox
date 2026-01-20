import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hideUsername(input: string): string {
  if (input.length <= 3) return input;
  const length = input.length;
  return input.substring(0, 2) + `*`.repeat(2) + input[length - 1];
}

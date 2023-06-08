import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// This twMerge merges a tailwind class optimizes the classes passed
// e.g. say u pass px-2, py-2 it merges it to p-2
// clsx is a utility for constructing className strings conditionally.
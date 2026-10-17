import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities.
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * @param {unknown} value
 * @returns {value is string} True for a string with at least one non-whitespace character.
 */
export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

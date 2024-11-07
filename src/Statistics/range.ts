/**
 * Calculate the range of an array of numbers.
 * @param values - Array of numbers.
 * @returns Range of the array (difference between max and min values).
 * @throws Error if the array is empty.
 */
export function range(values: number[]): number {
    if (values.length === 0) throw new Error("Cannot calculate the range of an empty array.");

    const min = Math.min(...values);
    const max = Math.max(...values);
    return max - min;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginOfError = marginOfError;
/**
 * Calculate the Margin of Error (MoE) for a given confidence level.
 * Optionally accepts a pre-calculated standard error.
 * @param stdDev - (Optional) Standard deviation of the sample, required if standardError is not provided.
 * @param sampleSize - (Optional) Sample size (n), required if standardError is not provided.
 * @param zScore - Z-score corresponding to the desired confidence level (default is 1.96 for 95% confidence).
 * @param standardError - (Optional) Pre-calculated standard error.
 * @returns Margin of Error.
 * @throws Error if insufficient data is provided to calculate the margin of error.
 */
function marginOfError(stdDev, sampleSize, zScore = 1.96, standardError) {
    // Calculate standard error if not provided
    const effectiveSE = standardError !== null && standardError !== void 0 ? standardError : (stdDev !== undefined && sampleSize !== undefined
        ? stdDev / Math.sqrt(sampleSize)
        : undefined);
    // Ensure we have standard error for the calculation
    if (effectiveSE === undefined) {
        throw new Error("Insufficient data to calculate margin of error. Provide either stdDev and sampleSize, or a pre-calculated standardError.");
    }
    return zScore * effectiveSE;
}
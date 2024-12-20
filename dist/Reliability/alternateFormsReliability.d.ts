/**
 * Calculate Alternate Forms Reliability.
 * @param formA - Scores from the first form of the test.
 * @param formB - Scores from the second form of the test.
 * @param correlationFunc - Correlation function specified by the user.
 * @returns Reliability coefficient between the two forms.
 * @throws Error if no correlation function is provided.
 */
export declare function alternateFormsReliability(formA: number[], formB: number[], correlationFunc?: (...args: any[]) => number): number;

export function lciToCdb (cdiFee: number, incomeTax: number): number {
    return incomeTax != 1 ? cdiFee / (1 - incomeTax) : 0;
}

export function cdbToLci(cdiFee: number, incomeTax: number): number {
    return cdiFee * (1 - incomeTax);
}

export function postFixedCdbToPrefixed(postFixedFee: number, interestRate: number) {
    return postFixedFee * interestRate;
}

export function postFixedLciToPrefixed(postFixedFee: number, incomeTax: number, interestRate: number) {
    return cdbToLci(postFixedFee, incomeTax) * interestRate
}

export function ipcaCdbToPrefixed(cdbFee: number, inflationRate: number) {
    return ((1 + inflationRate) * (cdbFee + 100)) - 100
}

export function ipcaLciToPrefixed(lciFee: number, incomeTax: number, inflationRate: number) {
    return ipcaCdbToPrefixed(lciFee, inflationRate) * (1 - incomeTax)
}

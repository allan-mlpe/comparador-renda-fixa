export function lciToCdb (cdiFee: number, incomeTax: number): number {
    return incomeTax != 1 ? cdiFee / (1 - incomeTax) : 0;
}

export function cdbToLci(cdiFee: number, incomeTax: number): number {
    return cdiFee * (1 - incomeTax);
}
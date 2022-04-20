export function generateRandomId() {
 return Math.random().toString(36).substr(2, 5)
} 

export function roundDecimalPlaces(num: number, decimalPlaces: number = 2): string {
 return (num || 0).toFixed(decimalPlaces)
}

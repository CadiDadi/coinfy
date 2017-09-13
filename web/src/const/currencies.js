import { decimals } from '/api/numbers'

export const USD = {
    symbol: 'USD',
    name: 'US Dollar',
    ascii: '$',
    format: (value,n) => `$${decimals(value,n)}`
}

export const EUR = {
    symbol: 'EUR',
    name: 'Euro',
    ascii: '€',
    format: (value,n) => `€${decimals(value,n)}`
}

export const GBP = {
    symbol: 'GBP',
    name: 'British Pound',
    ascii: '£',
    format: (value,n) => `£${decimals(value,n)}`
}


export const JPY = {
    symbol: 'JPY',
    name: 'Japanese Yen',
    ascii: '¥',
    format: (value,n) => `¥${decimals(value,n)}`
}

export const INR = {
    symbol: 'INR',
    name: 'Indian Rupee',
    ascii: '₹',
    format: (value,n) => `₹${decimals(value,n)}`
}

export const CNY = {
    symbol: 'CNY',
    name: 'Chinese Yuan Renminbi',
    ascii: '¥',
    format: (value,n) => `¥${decimals(value,n)}`
}

export const CAD = {
    symbol: 'CAD',
    name: 'Canadian Dollar',
    ascii: '$',
    format: (value,n) => `$${decimals(value,n)}`
}

export const AUD = {
    symbol: 'AUD',
    name: 'Australian Dollar',
    ascii: '$',
    format: (value,n) => `$${decimals(value,n)}`
}

export const SGD = {
    symbol: 'SGD',
    name: 'Singapore Dollar',
    ascii: '$',
    format: (value,n) => `$${decimals(value,n)}`
}

export const currencies = {
    USD: USD,
    EUR: EUR,
    GBP: GBP,
    INR: INR,
    JPY: JPY,
    CNY: CNY,
    AUD: AUD,
    CAD: CAD,
    SGD: SGD,
}
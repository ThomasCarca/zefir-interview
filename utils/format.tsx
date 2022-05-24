export const formatCurrency = (amount: number, currency: string) => Intl.NumberFormat('en-US', {style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0}).format(amount);
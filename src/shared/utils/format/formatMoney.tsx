export function formatMoney(amount: number, currency: string = "USD", digitsAfterDot = 2): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: digitsAfterDot,
  });

  return formatter.format(amount);
}

export function getMonth(
  dateString: string,
  month: Intl.DateTimeFormatOptions["month"] = "long",
  locale = "en-US",
) {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat(locale, { month });

  return formatter.format(date);
}

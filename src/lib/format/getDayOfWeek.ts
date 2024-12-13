export function getDayOfWeek(
  dateString: string,
  weekday: Intl.DateTimeFormatOptions["weekday"] = "long",
  locale = "en-US",
) {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat(locale, { weekday });

  return formatter.format(date);
}

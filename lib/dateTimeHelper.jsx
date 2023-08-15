export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

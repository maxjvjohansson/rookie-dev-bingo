export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

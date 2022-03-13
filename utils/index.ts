export function titleToUrl(title: string) {
  var words = title.split(" ");

  if (words.length > 6) {
    words.length = 6;
  }

  const url = words.join("-").toLowerCase();
  return url;
}

export function formatDate(date: string, language: string) {
  const options = { year: "numeric", day: "2-digit", month: "long" };
  const formated = new Date(date + "T03:00:00.000Z").toLocaleDateString(
    language,
    options as Intl.DateTimeFormatOptions
  );

  return formated;
}

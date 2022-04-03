export function titleToUrl(title: string) {
  var words = title.split(" ");

  if (words.length > 6) {
    words.length = 6;
  }

  const url = words.join("-").toLowerCase();
  return url;
}

export function formatDate(date: string, language: string) {
  const TIMEZONE = "T03:00:00.000Z";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "2-digit",
    month: "long",
  };
  const formated = new Date(date + TIMEZONE).toLocaleDateString(
    language,
    options
  );

  return formated;
}

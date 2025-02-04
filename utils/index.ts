export function titleToUrl(title: string) {
  var words = title.split(" ");

  if (words.length > 6) {
    words.length = 6;
  }

  const url = words.join("-").toLowerCase();
  return url;
}

export function formatDate(date: string, language: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "2-digit",
    month: "long",
  };
  const formated = new Date(date).toLocaleDateString(language, options);

  return formated;
}

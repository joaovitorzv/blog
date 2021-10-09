export function titleToUrl(title: string) {
  var words = title.split(' ')

  if (words.length > 6) {
    words.length = 6
  }

  const url = words.join('-').toLowerCase()
  return url
}

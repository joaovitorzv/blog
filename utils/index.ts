export function titleToUrl(title: string) {
  var words = title.split(' ')

  if (words.length > 6) {
    words.length = 6
  }

  const url = words.join('-').toLowerCase()
  return url
}

export function formatDate(date: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } 
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', day: 'numeric', month: 'long' })
}

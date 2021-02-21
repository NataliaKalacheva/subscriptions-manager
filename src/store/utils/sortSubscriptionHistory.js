export default function(response) {
  return response.sort((prev, next) => (prev.date > next.date ? 1 : -1))
}

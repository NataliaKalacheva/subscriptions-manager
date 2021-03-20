export default function(response) {
  return response.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
}

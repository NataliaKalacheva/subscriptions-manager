export default function(response) {
  if (!Array.isArray(response) || !response.length) {
    return {}
  }

  return response.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
}

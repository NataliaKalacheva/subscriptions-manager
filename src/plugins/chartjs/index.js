import Chart from 'chart.js'

Chart.elements.Rectangle.prototype.draw = function() {
  const { ctx } = this._chart
  const vm = this._view
  let left
  let right
  let top
  let bottom
  let signX
  let signY
  let borderSkipped
  let radius
  const { borderWidth } = vm
  const cornerRadius = 30

  if (!vm.horizontal) {
    left = vm.x - vm.width / 2
    right = vm.x + vm.width / 2
    top = vm.y
    bottom = vm.base
    signX = 1
    signY = bottom > top ? 1 : -1
    borderSkipped = vm.borderSkipped || 'bottom'
  } else {
    left = vm.base
    right = vm.x
    top = vm.y - vm.height / 2
    bottom = vm.y + vm.height / 2
    signX = right > left ? 1 : -1
    signY = 1
    borderSkipped = vm.borderSkipped || 'left'
  }

  if (borderWidth) {
    const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
    borderWidth = borderWidth > barSize ? barSize : borderWidth
    const halfStroke = borderWidth / 2
    const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
    const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
    const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
    const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
    if (borderLeft !== borderRight) {
      top = borderTop
      bottom = borderBottom
    }
    if (borderTop !== borderBottom) {
      left = borderLeft
      right = borderRight
    }
  }

  ctx.beginPath()
  ctx.fillStyle = vm.backgroundColor
  ctx.strokeStyle = vm.borderColor
  ctx.lineWidth = borderWidth

  const corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom]
  ]

  const borders = ['bottom', 'left', 'top', 'right']
  const startCorner = borders.indexOf(borderSkipped, 0)
  if (startCorner === -1) {
    startCorner = 0
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4]
  }

  let corner = cornerAt(0)
  let nextCornerId
  let nextCorner
  let width
  let height
  let x
  let y
  ctx.moveTo(corner[0], corner[1])

  for (let i = 1; i < 4; i++) {
    corner = cornerAt(i)
    nextCornerId = i + 1
    if (nextCornerId == 4) {
      nextCornerId = 0
    }

    nextCorner = cornerAt(nextCornerId)

    width = corners[2][0] - corners[1][0]
    height = corners[0][1] - corners[1][1]
    x = corners[1][0]
    y = corners[1][1]

    radius = cornerRadius

    if (radius > height / 2) {
      radius = height / 2
    }
    if (radius > width / 2) {
      radius = width / 2
    }

    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
  }

  ctx.fill()
  if (borderWidth) {
    ctx.stroke()
  }
}
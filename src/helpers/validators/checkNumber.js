const checkNumber = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Please input the value'))
  }
  if (!Number.isInteger(value)) {
    callback(new Error('Please input digits'))
  } else if (value <= 0) {
    callback(new Error('Value must be greater than 0'))
  } else {
    callback()
  }
}
export default checkNumber
